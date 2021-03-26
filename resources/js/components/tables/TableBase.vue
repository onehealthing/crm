<template>
    <template v-if="isRowsExists" :key="'rows-exists'">
        <div class="table-responsive" v-on="$attrs">
            <table class="table table-bordered table-hover table-cursor table-content-centered table-striped m-0">
                <thead>
                    <tr>
                        <template
                            v-for="title in titles"
                            :key="title"
                        >
                            <slot name="title" :title="title">
                                <th scope="col" class="text-center">{{ title }}</th>
                            </slot>
                        </template>
                    </tr>

                    <slot name="thead-additional"></slot>
                </thead>
                <tbody>
                    <template
                        v-for="(row, idx) in rows"
                        :key="idx"
                    >
                        <slot name="row" :row="row" :idx="idx"></slot>
                    </template>
                </tbody>
            </table>
        </div>
    </template>

    <template v-else :key="'rows-empty'">
        <slot name="empty-data-text" :text="emptyDataText">
            <p class="text-center my-5">{{ emptyDataText }}</p>
        </slot>
    </template>
</template>

<script>

    import { computed } from 'vue';

    export default {
        props: {
            titles: {
                required: true,
                type: Array
            },
            rows: {
                required: true,
                type: Array
            },
            emptyDataText: {
                type: String,
                default: 'Empty'
            }
        },
        setup(props) {

            const isRowsExists = computed(() => _.size(props.rows) > 0);

            return {
                isRowsExists
            };
        }
    }

</script>