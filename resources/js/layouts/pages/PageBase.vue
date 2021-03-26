<template functional>
    <div class="content-wrap">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="text-center mb-5">{{ title }}</h2>

                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            title: {
                required: true,
                type: String
            }
        }
    }

</script>