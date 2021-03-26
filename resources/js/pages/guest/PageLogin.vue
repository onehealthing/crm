<template>
    <div class="container h-100">
        <div class="row h-100">
            <div class="col-sm-6 my-auto mx-auto">
                <app-form
                    class="form-login-container"
                    :form-schema="formSchema"
                    @handleSubmit="login"
                >
                    <template #default="{ fields }">
                        <h2 class="text-center mb-3">CRM</h2>

                        <template
                            v-for="{ label, name, rules, type } in fields"
                            :key="name"
                        >
                            <div class="form-row">
                                <div class="mb-3 col-sm-12">
                                    <app-field-input
                                        :label="label"
                                        :rules="rules"
                                        :name="name"
                                        :type="type"
                                        :id="name"
                                        class="form-control"
                                    ></app-field-input>
                                </div>
                            </div>
                        </template>

                        <app-alert/>

                        <app-preloader :id="PRELOADER_ID">
                            <button class="btn btn-primary d-block m-auto w-25">Login</button>
                        </app-preloader>
                    </template>
                </app-form>
            </div>
        </div>
    </div>
</template>

<script>

    import { Preloader } from '@/components/preloaders';
    import { Alert } from '@/components/alerts';
    import { Input } from '@/components/fields';
    import { Form } from '@/components/forms';

    import { usePreloader, useAlert } from '@/functions';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { reactive } from 'vue';

    const PRELOADER_ID = 'form-login';

    export default {
        components: {
            'app-form': Form,
            'app-field-input': Input,
            'app-preloader': Preloader,
            'app-alert': Alert,
        },
        setup() {

            const formSchema = reactive({
                fields: [
                    {
                        label: 'Login',
                        name: 'login',
                        rules: 'required|max:255',
                        type: 'text'
                    },
                    {
                        label: 'Password',
                        name: 'password',
                        rules: 'required|max:255',
                        type: 'password'
                    },
                ]
            });

            const {
                push: showPreloader,
                hide: hidePreloader
            } = usePreloader();

            const {
                clearMessage: clearAlertMessage,
                setMessage: setAlertMessage
            } = useAlert();

            const {
                dispatch
            } = useStore();

            const {
                push
            } = useRouter();

            const login = ({ values: credentials, setErrors: setFormErrors, resetForm }) => {
                showPreloader(PRELOADER_ID);
                clearAlertMessage();

                dispatch('auth/login', credentials)
                    .then(() => {
                        push({ name: 'admin' });
                        resetForm();
                    })
                    .catch(err => {
                        setFormErrors(err.response.data.errors || {});
                        setAlertMessage(err.response.data.message || '');
                    })
                    .finally(() => {
                        hidePreloader(PRELOADER_ID);
                    });
            };

            return {
                PRELOADER_ID,
                formSchema,
                login
            };
        }
    }

</script>