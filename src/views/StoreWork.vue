<template>
    <div>
        <header-nav></header-nav>
        <div class="container-a">

            <div class="sub-container-a">
                <div>
                    <h4><strong>Cadastro de serviço</strong></h4>
                </div>
                <div class="form-container">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group
                                id="input-group-1"
                                label="Serviço:"
                                label-for="input-1"
                                description="Insira informações genéricas, pois quando o usuário ofertar ele vai completar"

                        >
                            <b-form-input
                                    id="input-2"
                                    v-model="form.name"
                                    required
                                    placeholder="Título do serviço"
                                    class="mb-1"
                            ></b-form-input>
                            <b-form-textarea
                                    id="textarea"
                                    v-model="form.description"
                                    placeholder="Descrição do serviço..."
                                    rows="3"
                                    max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>


                        <b-form-group id="input-group-3" label="Categoria e imagem:" label-for="input-3">
                            <b-form-select
                                    id="input-3"
                                    v-model="form.food"
                                    :options="dataSelect"
                                    required
                            ></b-form-select>
                        <div class="form-container-photo">
                            <b-card
                                    title="Imagem"
                                    img-src="https://picsum.photos/600/300/?image=25"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2">
                                <b-button href="#" variant="primary">Carregar imagem</b-button>
                            </b-card>
                        </div>
                        </b-form-group>
                        <b-button-group>
                            <b-button type="submit" variant="primary">Salvar</b-button>
                            <b-button type="reset" variant="danger">Redefinir</b-button>
                        </b-button-group>
                    </b-form>


                </div>
            </div>


        </div>
    </div>


</template>

<script>
    import header from "../components/headerNav";
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "StoreWork",
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                dataSelect: [{ text: 'Selecione uma categoria', value: null }],
                show: true
            }
        },
        components: {
            'header-nav': header,
        },
        computed: {
            ...mapGetters({ categoriesSelect: 'categoriesSelected'})
        },
        methods: {
            ...mapActions(['addWork', 'loadCategories']),
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },
            loadCategoruesListLocal() {
                this.loadCategories()
            },
            concatCategoriesSelect() {
                this.dataSelect.concat(this.categoriesSelect)
            }
        },
        mounted() {
            this.loadCategoruesListLocal()
            setTimeout(() =>{
                    this.dataSelect = this.dataSelect.concat(this.categoriesSelect)
            }, 2000)
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";
    .container-a {
        display: flex;
        flex-direction: column;
        align-items: center;
        .sub-container-a {
            background-color: $white;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 95%;
            min-height: 600px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            margin-bottom: 20px;
            .form-container {
                width: 95%;
                padding: 5px;
                margin: 5px;
                -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.62);
                -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.62);
                box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.62);
                .form-container-photo {
                    padding: 5px;
                    margin: 5px;
                }
            }
        }

    }
</style>
