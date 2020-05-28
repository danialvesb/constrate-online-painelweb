<template>
    <div>
        <header-nav></header-nav>
        <div class="container-a">

            <div class="sub-container-a">
                <div>
                    <h4><strong>Cadastro de serviço</strong></h4>
                </div>
                <div class="form-container">
                    <b-form>
                        <b-form-group
                                id="input-group-1"
                                label="Serviço:"
                                label-for="input-1"
                                description="Insira informações genéricas, pois quando o usuário ofertar ele vai completar">
                            <b-form-input
                                    id="input-2"
                                    v-model="data.title"
                                    required
                                    placeholder="Título do serviço"
                                    class="mb-1"
                            ></b-form-input>
                            <b-form-textarea
                                    id="textarea"
                                    v-model="data.description"
                                    placeholder="Descrição do serviço..."
                                    rows="3"
                                    max-rows="6"/>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Categoria e imagem:" label-for="input-3">
                            <b-form-select
                                    id="input-3"
                                    v-model="data.categorySelected"
                                    :options="dataSelect"
                                    required></b-form-select>
                        <div class="form-container-photo">
                            <b-card
                                    title="Imagem"
                                    img-src="https://picsum.photos/600/300/?image=25"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2">
                                <b-button @click="onShow()" variant="primary">Carregar imagem</b-button>
                            </b-card>
                        </div>
                        </b-form-group>
                        <b-button-group>
                            <b-button variant="primary" @click="addWork(data)">Salvar</b-button>
                            <b-button variant="danger" @click="onReset">Redefinir</b-button>
                        </b-button-group>
                        <b-modal id="modal-new" ref="modal-input-image" size="lg" hide-footer title="Inserir imagem">
                            <div>
                                <picture-input
                                        v-if="loaded"

                                        width="300"
                                        height="200"
                                        margin="5"
                                        accept="image/jpeg,image/png"
                                        size="5"
                                        hideChangeButton
                                        button-class="btn"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Arraste a imagem, ou clique para inserir!'
                                        }"  >
                                </picture-input>
                            </div>
                        </b-modal>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from "../components/headerNav";
    import { mapActions, mapGetters } from 'vuex'
    import PictureInput from 'vue-picture-input'
    import Vue from "vue";

    export default {
        name: "StoreWork",
        data() {
            return {
                data: {
                    title: '',
                    categorySelected: null,
                    description: '',
                    image_path: "/",
                },
                dataSelect: [{ text: 'Selecione uma categoria', value: null }],
                loaded: false
            }
        },
        components: {
            'header-nav': header,
            'picture-input': PictureInput
        },
        computed: {
            ...mapGetters({ categoriesSelect: 'categoriesSelected'})
        },
        methods: {
            ...mapActions(['addWork', 'loadCategories']),
            onReset() {
                this.data.title = ''
                this.data.description = ''
                this.data.categorySelected = null
            },
            async loadCategoruesListLocal() {
                await this.loadCategories()
                this.dataSelect = this.dataSelect.concat(this.categoriesSelect)
            },
            async addWork(data) {
                const workJson  = JSON.stringify(data)

                await Vue.prototype.$http.post('/services', workJson)
                this.onReset()
            },
            onChange(image) {
                console.log('New picture selected!')
                if (image) {
                    console.log('Picture loaded.')
                    this.image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            },
            toggleModalImage() {
                this.$refs['modal-input-image'].toggle('#toggle-btn')
                this.onShow()
            },
            onShow() {
                this.$refs['modal-input-image'].toggle('#toggle-btn')
                setTimeout( () => {
                    this.loaded = true;
                    window.dispatchEvent(new Event('resize'));
                })
            },
            // openNewPortfolio() {
            //     this.$refs['modal-input-image'].toggle('#toggle-btn')
            //     window.setTimeout(() => {
            //         this.$refs.pictureInput.onResize();
            //     }, 1000); //runs onResize() after a second
            // },
        },
        mounted() {
            this.loadCategoruesListLocal()
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
            width: 60%;
            min-width: 300px;
            min-height: 600px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            margin-bottom: 20px;
            .form-container {
                width: 95%;
                padding: 5px;
                margin: 5px;
                .form-container-photo {
                    padding: 5px;
                    margin: 5px;
                }
            }
        }
    }
</style>
