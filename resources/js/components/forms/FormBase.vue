<template>
    <form
        v-on="$attrs"
        @submit="onSubmit"
    >
        <slot :fields="formSchema.fields"></slot>
    </form>
</template>

<script>

    import { useForm } from 'vee-validate';

    export default {
        props: {
            formSchema: {
                required: true,
                type: Object
            }
        },
        setup(props, { emit }) {

            const {
                handleSubmit,
                setErrors,
            } = useForm();

            const onSubmit = handleSubmit(values => {
                emit('handleSubmit', {
                    values: values,
                    setErrors: setErrors
                });
            });

            return {
                onSubmit
            };
        }
    }

</script>