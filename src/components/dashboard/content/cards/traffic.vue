<template>
    <b-card
            class="mb-0 card-traffic"
            :header="data.id"
    >
        <b-card-body>
            <b-card-text>
                    {{ data.text }}
                <br>
                {{ data.qtd }}
            </b-card-text>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "traffic",
        props: {
            color: {
                require: true
            },
            data: {
                require: true
            },

        }
    }
</script>

<style scoped lang="scss">
    .card-traffic {
        outline: none;
        cursor: pointer;
        border: solid 1px;
        min-width: 25%!important;
        min-height: 100%;
    }

</style>
