<template>
    <div>

        <b-card class="m-1 p-1 card-container">
            <b-img src="https://placekitten.com/1000/300" class="img-fluid" width="500"></b-img>
            <strong>{{ work.title }}</strong>
            <b-card-text>
                {{ work.description }}
            </b-card-text>
            <b-button-group>
                <b-button variant="danger">Excluir</b-button>
                <b-button variant="primary">Editar</b-button>
            </b-button-group>
        </b-card>

    </div>
</template>

<script>
    export default {
        name: "work",
        props: {
            work: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";
    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        .card-container {
            outline: none;
            cursor: pointer;
        }

    }
</style>
