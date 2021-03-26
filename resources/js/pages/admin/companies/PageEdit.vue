<template>
    <app-page :title="'Edit company'">

        <router-link
            :to="{ name: 'admin.companies.list' }"
            class="btn btn-primary mb-2"
        >Back to companies
        </router-link>

        <app-preloader-blur :id="PRELOADER_COMPANY_FORM">
            <app-form
                class="my-5"
                :form-schema="formSchema"
                @handleSubmit="updateCompany"
            >
                <template #default="{ fields }">
                    <div class="form-row">
                        <div class="col-sm-6">
                            <template
                                v-for="{ label, name, rules, type, value } in fields"
                                :key="name"
                            >
                                <app-field-input
                                    :id="name"
                                    :name="name"
                                    :type="type"
                                    :label="label"
                                    :rules="rules"
                                    :value="value"
                                    class="form-control my-3"
                                />
                            </template>

                            <template v-if="selectedClients.exists">
                                <p>Selected clients:</p>

                                <template
                                    v-for="{ name, id } in selectedClients.list"
                                    :key="id"
                                >
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-delete mr-1 mb-1"
                                        @click="removeSelectedClient(id)"
                                    >{{ name }}</button>
                                </template>
                            </template>
                        </div>

                        <div class="col-sm-6">
                            <app-field-multiselect
                                :title="'Choose clients (optional)'"
                                :name="'clients'"
                                :url="'clients'"
                                :keys="{ title: 'name' }"
                                @onItemSelected="pushToClients"
                            />
                        </div>

                        <button class="btn btn-primary mt-5 w-100">Update</button>
                    </div>
                </template>
            </app-form>
        </app-preloader-blur>

    </app-page>
</template>

<script>

    import { Page } from '@/layouts/pages';

    import { Input, Multiselect } from '@/components/fields';
    import { Blur } from '@/components/preloaders';
    import { Form } from '@/components/forms';

    import { reactive, computed, onBeforeMount } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { usePreloader } from '@/functions';

    import http from '@/api/v1/http';

    const PRELOADER_COMPANY_FORM = 'form-company-update';

    export default {
        components: {
            'app-page': Page,
            'app-field-multiselect': Multiselect,
            'app-preloader-blur': Blur,
            'app-field-input': Input,
            'app-form': Form,
        },
        setup() {

            const formSchema = reactive({
                fields: [
                    {
                        label: 'Title',
                        name: 'title',
                        rules: 'required|max:255',
                        value: ''
                    }
                ]
            });

            const selectedClients = reactive({
                list: [],
                exists: computed(() => _.size(selectedClients.list) > 0)
            });

            const {
                push
            } = useRouter();

            const {
                params
            } = useRoute();

            const {
                push: showPreloader,
                hide: hidePreloader
            } = usePreloader();

            const fetchCompany = () => {
                return new Promise((resolve, reject) => {
                    showPreloader(PRELOADER_COMPANY_FORM);

                    http
                        .get(`companies/${params.id}`)
                        .then(({ data }) => {
                            const title = _.find(formSchema.fields, { name: 'title' });
                            title.value = data.title;
                            resolve();
                        })
                        .catch(() => {
                            reject();
                        })
                        .finally(() => {
                            hidePreloader(PRELOADER_COMPANY_FORM);
                        });
                });
            }

            const fetchCompanyClients = () => {
                return new Promise((resolve, reject) => {
                    http
                        .get(`companies/${params.id}/clients`)
                        .then(({ data }) => {
                            selectedClients.list = data.data;
                            resolve();
                        })
                        .catch(() => {
                            reject();
                        });
                });
            }

            const updateCompany = ({ values: company, setErrors }) => {
                showPreloader(PRELOADER_COMPANY_FORM);

                http
                    .put(`companies/${params.id}`, {
                        title: company.title,
                        clients: _.map(selectedClients.list, 'id')
                    })
                    .then(() => {
                        push({ name: 'admin.companies.list' });
                    })
                    .catch(err => {
                        setErrors(err.response.data.errors);
                    })
                    .finally(() => {
                        hidePreloader(PRELOADER_COMPANY_FORM);
                    });
            }

            const pushToClients = client => {
                selectedClients.list.push(client);
                selectedClients.list = _.uniq(selectedClients.list);
            }

            const removeSelectedClient = id => {
                selectedClients.list = _.filter(selectedClients.list, i => i.id != id);
            }

            onBeforeMount(async () => {
                await fetchCompany();
                await fetchCompanyClients();
            });

            return {
                PRELOADER_COMPANY_FORM,
                selectedClients,
                formSchema,
                removeSelectedClient,
                updateCompany,
                pushToClients
            }
        }
    }

</script>