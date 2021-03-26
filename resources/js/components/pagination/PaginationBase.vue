<template>
    <template
        v-if="isNeeded"
        :key="'pagination-needed'"
    >
        <nav v-bind="$attrs">
            <ul class="pagination justify-content-center m-0">
                <template
                    v-if="!isOnFirstPage"
                    :key="'btn-prev'"
                >
                    <li
                        @click="prev()"
                        class="page-item"
                    >
                        <span aria-label="Previous" role="button" class="page-link">
                            <span aria-hidden="true">«</span>
                        </span>
                    </li>
                </template>

                <template
                    v-for="page in totalPages"
                    :key="page"
                >
                    <li
                        class="page-item"
                        :class="{ 'active': isOnSamePage(page) }"
                        @click="go(page)"
                    >
                        <span role="button" class="page-link">{{ page }}</span>
                    </li>
                </template>

                <template
                    v-if="!isOnLastPage"
                    :key="'btn-next'"
                >
                    <li
                        @click="next()"
                        class="page-item"
                    >
                        <span aria-label="Next" role="button" class="page-link">
                            <span aria-hidden="true">»</span>
                        </span>
                    </li>
                </template>
            </ul>
        </nav>
    </template>
</template>

<script>

    import { computed, inject, toRefs, reactive } from 'vue';

    export default {
        setup(props, { emit }) {

            const { totalPages, currPage, url } = toRefs(inject('paginator'));

            const paginator = reactive({
                isOnFirstPage: computed(() => currPage.value <= 1),
                isOnLastPage: computed(() => currPage.value >= totalPages.value),
                isNeeded: computed(() => totalPages.value > 1),
                totalPages: computed(() => {
                    let curr = currPage.value;

                    if (paginator.isOnFirstPage) {
                        return [curr, curr + 1, curr + 2];
                    }

                    if (paginator.isOnLastPage) {
                        return [curr - 2, curr - 1, curr];
                    }

                    return [curr - 1, curr, curr + 1];
                })
            });

            const canGo = page => !(isOnSamePage(page) || (page < 1) || (page > totalPages.value));

            const isOnSamePage = page => currPage.value == page;

            const go = page => {
                if (!canGo(page)) return;

                emit('onPageSelected', `${url.value}?page=${page}`);
            };

            const prev = () => {
                go(currPage.value - 1);
            };

            const next = () => {
                go(currPage.value + 1);
            };

            return {
                ...toRefs(paginator),
                isOnSamePage,
                prev,
                next,
                go
            };
        }
    }

</script>