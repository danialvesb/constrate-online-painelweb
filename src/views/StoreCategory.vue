<template>
    <div>
        <header-nav></header-nav>
        <div class="buttons m-1">
            <b-button variant="success">Cadastrar categoria</b-button>
        </div>
        <div class="container-a mt-2 pt-3">
            <div class="sub-container-a">

                <div class="table-users">
                    <div>
                        <h3>Categorias</h3>
                    </div>
                    <b-form>
                        <b-form-input size="sm" class="mr-sm-2 mb-1" placeholder="Pesquisar"></b-form-input>
                    </b-form>
                    <b-table
                            hover
                            id="table-users"
                            :items="categories"
                            :per-page="perPage"
                            :current-page="currentPage"
                            :fields="fields"
                            responsive
                            :busy="isBusy">
                        <template v-slot:table-busy>
                            <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                            </div>
                        </template>
                    </b-table>
                </div>
                <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="table-users">
                </b-pagination>
            </div>
        </div>

    </div>


</template>

<script>
    import header from "../components/headerNav";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "StoreCategory",
        data() {
            return {
                perPage: 9,
                currentPage: 1,
                fields: [
                    {
                        key: 'id',
                        label: 'Id'
                    },
                    {
                        key: 'title',
                        label: 'Título'
                    },

                ],
                isBusy: true,
            }
        },
        components: {
            'header-nav': header,
            // 'chart': chart
        },
        methods: {
            ...mapActions(['loadCategories']),
            loadCategoriesDataLocal() {
                this.loadCategories()
            },
            toggleBusy() {
                if (this.categories.length > 0 && this.isBusy == true) {
                    this.isBusy = !this.isBusy
                }
            }
        },
        computed: {
            ...mapGetters({categories:'categoriesList'}),
            rows() {
                return this.categories.length
            }

        },
        mounted() {
            this.loadCategoriesDataLocal()

        },
        updated() {
            this.toggleBusy()
        }

    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";

    .container-a {
        background-color: $secondary;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 800px;
        align-items: center;
        .sub-container-a {
            background-color: $white;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
            min-height: 600px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            margin-bottom: 20px;
            .buttons {
                display: flex;
                margin: 10px;
                justify-content: flex-end;
            }
            .table-users {
                width: 95%;
                min-height: 450px;
                margin: 5px;
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                border: solid 1px rgba(48, 60, 84, 0.38);
                div {
                    margin: 4px;
                    h3 {
                        color: $black
                    }
                }
            }
        }
    }
</style>
