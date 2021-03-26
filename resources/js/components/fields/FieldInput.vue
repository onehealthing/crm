<template>
    <template v-if="showLabel" :key="'label-enabled'">
        <slot name="label" :id="id" :title="label">
            <label :for="id">{{ label }}</label>
        </slot>
    </template>

    <input
        v-model="inputValue"
        v-bind="$attrs"
        :type="type"
        :name="name"
        :id="id"
        :class="validationClass"
    />

    <template v-if="showError" :key="'error-enabled'">
        <slot name="error" :message="error">
            <div class="invalid-feedback">{{ error }}</div>
        </slot>
    </template>
</template>

<script>

    import { useInput } from '@/functions';

    import { watchEffect } from 'vue';

    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: [String, Number],
                required: true
            },
            label: {
                type: String,
                default: ''
            },
            value: {
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            rules: {
                type: String,
                default: ''
            },
            showLabel: {
                type: Boolean,
                default: true
            },
            showError: {
                type: Boolean,
                default: true
            }
        },
        setup(props) {

            const {
                value: inputValue,
                validationClass,
                error
            } = useInput({
                props
            });

            watchEffect(() => {
                inputValue.value = props.value;
            });

            return {
                validationClass,
                inputValue,
                error
            };
        },
    };

</script>
