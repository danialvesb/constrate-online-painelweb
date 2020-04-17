<template>
    <div>
        <header-nav></header-nav>
        <div class="container-a">
            <div class="buttons">
                <b-button variant="success">Cadastrar categoria</b-button>
            </div>
            <div class="table-categories">
                <b-table striped hover :items="items"></b-table>
            </div>
        </div>
    </div>


</template>

<script>
    import header from "../components/header";
    export default {
        name: "StoreCategory",
        data() {
            return {
                items: [
                    {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
                    {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
                    {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
                    {age: 38, first_name: 'Jami', last_name: 'Carney'}
                ]
            }
        },
        components: {
            'header-nav': header,
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";

    .container-a {
        background-color: $secondary;
        display: flex;
        flex-direction: column;
        width: 95%;
        min-height: 800px;
        margin: auto;

        .buttons {
            display: flex;
            margin: 10px;
            justify-content: flex-end;
        }
    }
</style>
