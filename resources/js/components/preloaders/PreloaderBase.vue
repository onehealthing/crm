<template functional>
    <template
        v-if="isActive(id)"
        :key="'pending'"
    >
        <div
            class="d-flex align-items-center justify-content-center"
            :style="options.styles"
            :class="options.class"
        >
            <slot name="preloader">
                <div class="spinner-border" role="status"></div>
            </slot>
        </div>
    </template>

    <template
        v-else
        :key="'data'"
    >
        <slot></slot>
    </template>
</template>

<script>

    import { inject } from 'vue';

    export default {
        props: {
            id: {
                required: true,
                type: String
            },
            options: {
                type: Object,
                default: {
                    styles: {},
                    class: ''
                }
            },
        },
        setup() {

            const { isActive } = inject('preloader');

            return {
                isActive
            };
        }
    }

</script>