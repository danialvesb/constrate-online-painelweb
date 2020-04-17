<template>
    <div>
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
            <b-card-body>
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card-body>
            <b-card-footer>
                <div class="category-work">
                    Categorias
                </div>
                <div class="buttons-work">
                    Botões
                </div>

            </b-card-footer>
        </b-card>

    </div>
</template>

<script>
    export default {
        name: "work"
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";
    div {
        margin: 3px;
        padding: 10px;
        .category-work {
            border-radius: 10px;
            background-color: $primary;
        }
    }
</style>
