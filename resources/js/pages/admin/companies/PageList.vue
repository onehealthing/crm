<template>
    <app-page :title="'Companies'">

        <router-link
            :to="{ name: 'admin.companies.create' }"
            class="btn btn-primary mb-2"
        >Create</router-link>

        <app-preloader
            :id="PRELOADER_COMPANIES_ALL"
            :options="{
                styles: { 'height': '400px' },
                class: 'preloader-placeholder'
            }"
        >
            <app-preloader-blur :id="PRELOADER_COMPANIES_LIST">
                <app-table
                    ref="scrollRef"
                    class="mb-5"
                    :titles="titles"
                    :rows="rows"
                >
                    <template #row="{ row: company, idx }">
                        <tr class="text-center">
                            <td>{{ idx + 1 }}</td>
                            <td>{{ company.title }}</td>
                            <td style="width: 275px">
                                <app-preloader-blur :id="PRELOADER_COMPANY_ACTION(idx)">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <router-link
                                            :to="{
                                                name: 'admin.companies.edit',
                                                params: {
                                                    id: company.id
                                                }
                                            }"
                                            class="btn btn-secondary mx-1"
                                        >Edit
                                        </router-link>
                                        <button
                                            type="button"
                                            class="btn btn-danger mx-1"
                                            @click="deleteCompany(company.id, idx)"
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
            @onPageSelected="paginateCompanies"
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

    const PRELOADER_COMPANY_ACTION = id => `on-row-action-${id}`;
    const PRELOADER_COMPANIES_LIST = 'companies-list';
    const PRELOADER_COMPANIES_ALL = 'companies-all';

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

            const companies = ref([]);

            const {
                titles,
                rowId,
                rows,
                deleteRow,
            } = useTable({
                titles: [
                    '#', 'Name', 'Actions'
                ],
                rows: companies
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

            const paginateCompanies = url => {
                fetchCompanies(url, PRELOADER_COMPANIES_LIST)
                    .finally(() => {
                        handleScroll();
                    });
            };

            const fetchAllCompanies = preloader => {
                return new Promise(async resolve => {
                    await fetchCompanies('companies', preloader);
                    resolve();
                });
            };

            const fetchCompanies = (url, preloader) => {
                return new Promise(resolve => {
                    showPreloader(preloader);

                    http.get(url)
                        .then(({ data }) => {
                            companies.value = data.data;
                            init({ url, ...data.pagination });
                            resolve();
                        })
                        .finally(() => {
                            hidePreloader(preloader);
                        });
                });
            };

            const deleteCompany = (companyId, rowId) => {
                showPreloader(PRELOADER_COMPANY_ACTION(rowId));

                http.delete(`companies/${companyId}`)
                    .then(() => {
                        deleteRow(rowId);
                    })
                    .finally(() => {
                        hidePreloader(PRELOADER_COMPANY_ACTION(rowId));
                    });
            };

            onBeforeMount(() => {
                fetchAllCompanies(PRELOADER_COMPANIES_ALL);
            });

            return {
                PRELOADER_COMPANY_ACTION,
                PRELOADER_COMPANIES_LIST,
                PRELOADER_COMPANIES_ALL,
                scrollRef,
                titles,
                rowId,
                rows,
                paginateCompanies,
                deleteCompany,
            };
        }
    }

</script>