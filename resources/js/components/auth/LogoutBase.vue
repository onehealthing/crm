<template>
    <app-preloader :id="PRELOADER_ID">
        <template #preloader>
            <div class="spinner-border spinner-border-sm align-self-center" role="status"></div>
        </template>

        <slot :handleLogout="handleLogout"/>
    </app-preloader>
</template>

<script>

    import { Preloader } from '@/components/preloaders';

    import { usePreloader } from '@/functions';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const PRELOADER_ID = 'logout';

    export default {
        components: {
            'app-preloader': Preloader
        },
        setup() {

            const {
                push: showPreloader,
                hide: hidePreloader
            } = usePreloader();

            const { push } = useRouter();

            const { dispatch } = useStore();

            const handleLogout = () => {
                showPreloader(PRELOADER_ID);

                dispatch('auth/logout')
                    .then(() => {
                        push({ name: 'login' });
                    })
                    .finally(() => {
                        hidePreloader(PRELOADER_ID);
                    });
            }

            return {
                PRELOADER_ID,
                handleLogout
            };
        }
    }

</script>