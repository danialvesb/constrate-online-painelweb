<template>
    <div>
        <b-card
                class="mb-2 card-traffic bg-primary"
        >
            <b-card-text class="text-white">
                <strong>9.823
                    <br>
                    Members online Members online Members
                </strong>
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
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-traffic {
        outline: none;
        border: solid 1px;
        word-wrap: break-word;
    }

</style>
