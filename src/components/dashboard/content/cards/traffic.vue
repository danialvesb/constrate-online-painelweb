<template>
    <div>
        <b-card
                class="mb-2 card-traffic bg-primary"
        >
            <b-card-text class="text-white">
                <strong>9.823
                    <br>
                    Members online
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
        margin: 10px;
        max-width: 40rem;
        min-width: 30rem;
        min-height: 8rem;
        outline: none;
    }

</style>
