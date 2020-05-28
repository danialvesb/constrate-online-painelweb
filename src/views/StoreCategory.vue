<template>
    <div>
        <header-nav></header-nav>
        <div class="buttons m-1">
            <b-button variant="success" @click="toggleModal()">Cadastrar categoria</b-button>
        </div>
        <div class="container-a mt-2 pt-3">
            <div class="sub-container-a">
                <div class="table-users">
                    <div>
                        <h3>Categorias</h3>
                    </div>
<!--                    <b-form>-->
<!--                        <b-form-input size="sm" class="mr-sm-2 mb-1" style="width: 50%" placeholder="Pesquisar"></b-form-input>-->
<!--                    </b-form>-->
                    <b-table
                            hover
                            id="table-users"
                            :items="categoriesMap()"
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
                        <template v-slot:cell(_showOptions)="row">
                            <b-button-group>
                                <b-button size="sm" @click="toggleModalUpdate(row.item)" class="mr-2" variant="primary">
                                    Editar
                                </b-button>
                                <b-button size="sm" @click="toggleModalDelete(row.item)" class="mr-2" variant="danger">
                                    Apagar
                                </b-button>

                            </b-button-group>
                        </template>
                    </b-table>
                </div>
                <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="table-users">
                </b-pagination>
                <div>
                    <b-modal id="modal-new" ref="modal-category" hide-footer>
                        <div class="d-block text-center">
                            <h3>Nova Categoria</h3>
                            <b-form-input v-model="category.title" placeholder="Insira o nome"></b-form-input>
                        </div>
                        <b-button class="mt-3" variant="success" block @click="onClickSaveCategory()">Salvar</b-button>
                        <b-button class="mt-2" variant="warning" block @click="hideModal">Cancelar</b-button>
                    </b-modal>
                    <b-modal id="modal-delete" ref="modal-category-delete" hide-footer>
                        <div class="d-block text-center">
                            <small>Lembre-se não é possível excluir categorias que tenha serviços vínculados</small>
                            <h3>Confirmar apagar categoria?</h3>
                        </div>
                        <b-button class="mt-3" variant="danger" block @click="onClickDeleteCategory()">Apagar</b-button>
                        <b-button class="mt-2" variant="warning" block @click="hideModal">Cancelar</b-button>
                    </b-modal>
                    <b-modal id="modal-delete" ref="modal-category-update" hide-footer>
                        <div class="d-block text-center">
                            <h3>Editar categoria</h3>
                            <b-form-input v-model="category.title"></b-form-input>
                        </div>
                        <b-button class="mt-3" variant="success" block @click="onClickUpdateCategory()">Salvar edição</b-button>
                        <b-button class="mt-2" variant="warning" block @click="hideModal">Cancelar</b-button>
                    </b-modal>
                </div>
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
                    {
                        key: '_showOptions',
                        label: 'Opções'
                    },
                ],
                isBusy: true,
                category: {
                    id: 0,
                    title: ''
                }
            }
        },
        components: {
            'header-nav': header,
            // 'chart': chart
        },
        methods: {
            ...mapActions(['loadCategories', 'addCategory', 'removeCategory', 'updateCategory']),
            loadCategoriesDataLocal() {
                this.loadCategories()
            },
            toggleBusy() {
                if (this.categories.length > 0 && this.isBusy == true) {
                    this.isBusy = !this.isBusy
                }
            },
            categoriesMap(){
                let categoriesMap = this.categories.map( category => {
                    return { id:category.id, title: category.title, _showOptions: true }
                } )
                return categoriesMap
            },
            hideModal() {
                this.category.title = ''
                this.$refs['modal-category'].hide()
                this.$refs['modal-category-delete'].hide()
                this.$refs['modal-category-update'].hide()
            },
            onClickSaveCategory() {
                this.addCategory(this.category)
                this.loadCategoriesDataLocal()
                this.category.title = ''
                this.hideModal();

            },
            onClickDeleteCategory() {
                this.removeCategory(this.category.id)
                this.category = { id: 0, title: '' }
                this.loadCategoriesDataLocal()
                this.hideModal();
            },
            onClickUpdateCategory() {
                this.updateCategory(this.category)
                this.category = { id: 0, title: '' }
                this.loadCategoriesDataLocal()
                this.hideModal();
            },
            toggleModal() {
                this.category.title = ''
                this.category.id = 0
                this.$refs['modal-category'].toggle('#toggle-btn')
            },
            toggleModalDelete(item) {
                this.category.id = item.id
                this.category.title = item.title
                this.$refs['modal-category-delete'].toggle('#toggle-btn')
            },
            toggleModalUpdate(item) {
                this.category.id = item.id
                this.category.title = item.title
                this.$refs['modal-category-update'].toggle('#toggle-btn')
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
            width: 70%;
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
