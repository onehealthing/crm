<template>
    <app-page :title="'Clients'">

        <router-link
            :to="{ name: 'admin.clients.create' }"
            class="btn btn-primary mb-2"
        >Create</router-link>

        <app-preloader
            :id="PRELOADER_CLIENTS_ALL"
            :options="{
                styles: { 'height': '400px' },
                class: 'preloader-placeholder'
            }"
        >
            <app-preloader-blur :id="PRELOADER_CLIENTS_LIST">
                <app-table
                    ref="scrollRef"
                    class="mb-5"
                    :titles="titles"
                    :rows="rows"
                >
                    <template #row="{ row: client, idx }">
                        <tr class="text-center">
                            <td>{{ idx + 1 }}</td>
                            <td>{{ client.name }}</td>
                            <td style="width: 275px">
                                <app-preloader-blur :id="PRELOADER_CLIENT_ACTION(idx)">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <router-link
                                            :to="{
                                                name: 'admin.clients.edit',
                                                params: {
                                                    id: client.id
                                                }
                                            }"
                                            class="btn btn-secondary mx-1"
                                        >Edit
                                        </router-link>
                                        <button
                                            type="button"
                                            class="btn btn-danger mx-1"
                                            @click="deleteClient(client.id, idx)"
                                        >Delete
                                        </button>
                                    </div>
                                </app-preloader-blur>
                            </td>
                        </tr>
                    </template>
                </app-table>
            </app-preloader-blur>
        </app-preloader>

        <app-pagination
            @onPageSelected="paginateClients"
            class="my-5"
        />

    </app-page>
</template>

<script>

    import { Page } from '@/layouts/pages';

    import { Preloader, Blur } from '@/components/preloaders';
    import { Pagination } from '@/components/pagination';
    import { Input } from '@/components/fields';
    import { Table } from '@/components/tables';

    import { useTable, usePreloader, usePaginator, useScroll } from '@/functions';
    import { ref, onBeforeMount } from 'vue';

    import http from '@/api/v1/http';

    const PRELOADER_CLIENT_ACTION = id => `on-row-action-${id}`;
    const PRELOADER_CLIENTS_LIST = 'clients-list';
    const PRELOADER_CLIENTS_ALL = 'clients-all';

    export default {
        components: {
            'app-page': Page,
            'app-pagination': Pagination,
            'app-preloader-blur': Blur,
            'app-preloader': Preloader,
            'app-field-input': Input,
            'app-table': Table,
        },
        setup() {

            const clients = ref([]);

            const {
                titles,
                rowId,
                rows,
                deleteRow,
            } = useTable({
                titles: [
                    '#', 'Name', 'Actions'
                ],
                rows: clients
            });

            const {
                push: showPreloader,
                hide: hidePreloader
            } = usePreloader();

            const {
                scrollRef,
                handleScroll
            } = useScroll();

            const {
                init
            } = usePaginator();

            const paginateClients = url => {
                fetchClients(url, PRELOADER_CLIENTS_LIST)
                    .finally(() => {
                        handleScroll();
                    });
            };

            const fetchAllClients = preloader => {
                return new Promise(async resolve => {
                    await fetchClients('clients', preloader);
                    resolve();
                });
            };

            const fetchClients = (url, preloader) => {
                return new Promise(resolve => {
                    showPreloader(preloader);

                    http.get(url)
                        .then(({ data }) => {
                            clients.value = data.data;
                            init({ url, ...data.pagination });
                            resolve();
                        })
                        .finally(() => {
                            hidePreloader(preloader);
                        });
                });
            };

            const deleteClient = (clientId, rowId) => {
                showPreloader(PRELOADER_CLIENT_ACTION(rowId));

                http.delete(`clients/${clientId}`)
                    .then(() => {
                        deleteRow(rowId);
                    })
                    .finally(() => {
                        hidePreloader(PRELOADER_CLIENT_ACTION(rowId));
                    });
            };

            onBeforeMount(() => {
                fetchAllClients(PRELOADER_CLIENTS_ALL);
            });

            return {
                PRELOADER_CLIENT_ACTION,
                PRELOADER_CLIENTS_LIST,
                PRELOADER_CLIENTS_ALL,
                scrollRef,
                titles,
                rowId,
                rows,
                paginateClients,
                deleteClient,
            };
        }
    }

</script>