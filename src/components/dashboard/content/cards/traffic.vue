<template>
    <div>
        <b-card
                class="mb-2 card-traffic bg-primary"
        >
            <b-card-text class="text-white">
                <strong>
                    {{ data.text }}
                </strong>
                <br>
                {{ data.qtd }}
            </b-card-text>
        </b-card>
    </div>
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
        word-wrap: break-word;
    }

</style>
