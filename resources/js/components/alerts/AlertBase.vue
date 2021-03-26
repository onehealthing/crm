<template>
    <template
        v-if="message"
        :key="'alert-needed'"
    >
        <slot :message="message">
            <p class="text-center text-danger">{{ message }}</p>
        </slot>
    </template>
</template>

<script>

    import { inject, toRefs } from 'vue';

    export default {
        setup() {

            const { message } = toRefs(inject('alert'));

            return {
                message
            };
        }
    }

</script>