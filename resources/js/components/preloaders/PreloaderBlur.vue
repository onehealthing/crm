<template functional>
    <div
        class="preloader-container"
        v-bind="$attrs"
    >
        <template
            v-if="isActive(id)"
            :key="'pending'"
        >
            <div class="preloader-wrap">
                <div class="spinner-border" role="status"></div>
            </div>
        </template>

        <div :class="{ 'preloader-blur': isActive(id) }">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import { inject } from 'vue';

    export default {
        props: {
            id: {
                required: true,
                type: String
            }
        },
        setup() {

            const { isActive } = inject('preloader')

            return {
                isActive
            };
        }
    }

</script>