<template>
    <app-page :title="'Create client'">

        <router-link
            :to="{ name: 'admin.clients.list' }"
            class="btn btn-primary mb-2"
        >Back to clients
        </router-link>

        <app-preloader-blur :id="PRELOADER_CLIENT_FORM">
            <app-form
                class="my-5"
                :form-schema="formSchema"
                @handleSubmit="createClient"
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

                            <template v-if="selectedCompanies.exists">
                                <p>Selected companies</p>

                                <template
                                    v-for="{ title, id } in selectedCompanies.list"
                                    :key="id"
                                >
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-delete mr-1 mb-1"
                                        @click="removeSelectedCompany(id)"
                                    >{{ title }}</button>
                                </template>
                            </template>
                        </div>

                        <div class="col-sm-6">
                            <app-field-multiselect
                                :title="'Choose companies (optional)'"
                                :name="'companies'"
                                :url="'companies'"
                                :keys="{ title: 'title' }"
                                @onItemSelected="pushToCompanies"
                            />
                        </div>

                        <button class="btn btn-primary mt-5 w-100">Create</button>
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

import { usePreloader } from '@/functions';
import { useRouter } from 'vue-router';
import { computed, reactive } from 'vue';

import http from '@/api/v1/http';

const PRELOADER_CLIENT_FORM = 'form-client-create';

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
                    label: 'Name',
                    name: 'name',
                    rules: 'required|max:255'
                }
            ]
        });

        const selectedCompanies = reactive({
            list: [],
            exists: computed(() => _.size(selectedCompanies.list) > 0)
        });

        const {
            push
        } = useRouter();

        const {
            push: showPreloader,
            hide: hidePreloader
        } = usePreloader();

        const createClient = ({ values: client, setErrors }) => {
            showPreloader(PRELOADER_CLIENT_FORM);

            http
                .post('clients', {
                    name: client.name,
                    companies: _.map(selectedCompanies.list, 'id')
                })
                .then(() => {
                    push({ name: 'admin.clients.list' });
                })
                .catch(err => {
                    setErrors(err.response.data.errors);
                })
                .finally(() => {
                    hidePreloader(PRELOADER_CLIENT_FORM);
                });
        }

        const pushToCompanies = client => {
            selectedCompanies.list.push(client);
            selectedCompanies.list = _.uniq(selectedCompanies.list);
        }

        const removeSelectedCompany = id => {
            selectedCompanies.list = _.filter(selectedCompanies.list, i => i.id != id);
        }

        return {
            PRELOADER_CLIENT_FORM,
            selectedCompanies,
            formSchema,
            removeSelectedCompany,
            pushToCompanies,
            createClient
        }
    }
}

</script>