<template>
    <app-preloader-blur :id="PRELOADER_ID">
        <div class="row">
            <div class="col-sm-12">
                <p>{{ title }}</p>
            </div>

            <template
                v-for="item in list"
                :key="item"
            >
                <div class="col-sm-6">
                    <button
                        class="btn btn-outline-secondary m-2 w-100"
                        type="button"
                        @click="selectItem(item)"
                    >{{ item[keys.title] }}</button>
                </div>
            </template>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <app-pagination
                    @onPageSelected="paginateList"
                    class="mt-3"
                />
            </div>
        </div>
    </app-preloader-blur>
</template>

<script>

    import { Pagination } from '@/components/pagination';
    import { Blur } from '@/components/preloaders';

    import { usePaginator, usePreloader } from '@/functions';
    import { ref, onBeforeMount } from 'vue';

    import http from '@/api/v1/http';

    const PRELOADER_ID = 'multiselect';

    export default {
        components: {
            'app-pagination': Pagination,
            'app-preloader-blur': Blur
        },
        props: {
            title: {
                required: true,
                type: String
            },
            url: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            keys: {
                required: true,
                type: Object
            }
        },
        setup(props, { emit }) {

            const list = ref([]);

            const {
                push: showPreloader,
                hide: hidePreloader
            } = usePreloader();

            const {
                init
            } = usePaginator();

            const paginateList = url => {
                fetchList(url);
            }

            const fetchAllList = () => {
                return new Promise(async resolve => {
                    await fetchList(props.url);
                    resolve();
                });
            }

            const fetchList = url => {
                showPreloader(PRELOADER_ID);

                return new Promise(resolve => {
                    http.get(url)
                        .then(({ data }) => {
                            list.value = data.data;
                            init({ url, ...data.pagination });
                            resolve();
                        })
                        .finally(() => {
                            hidePreloader(PRELOADER_ID);
                        });
                });
            }

            const selectItem = item => {
                emit('onItemSelected', item);
            }

            onBeforeMount(() => {
                fetchAllList();
            });

            return {
                PRELOADER_ID,
                list,
                paginateList,
                selectItem
            }

        }
    }

</script>
