<template>
    <div class="main">
        <header-nav></header-nav>
        <div class="container-dynamic">
            <div v-if="show" class="container-profile">
                <div class="header-profile">
                    <div class="profile-container-avatar">
                        <b-avatar src="https://placekitten.com/300/300" size="10rem"></b-avatar>
                    </div>
                    <div class="infos-user">
                        <h5>{{ getMeLocal.name }}</h5>
                    </div>
                </div>
                <div class="body-profile">
                    <span style="color: white">
                        E-mail: <strong>{{ getMeLocal.email }}</strong>
                    </span>
                    <span style="color: white">
                        Celular: <strong>{{ getMeLocal.mobile }}</strong>
                    </span>
                    <span style="color: white">
                        Cidade: <strong>{{ getMeLocal.city }}</strong>
                    </span>
                    <span style="color: white">
                        UF: <strong>{{ getMeLocal.uf }}</strong>
                    </span>
                    <span style="color: white">
                        Bairro: <strong>{{ getMeLocal.district }}</strong>
                    </span>
                </div>
                <div class="footer-profile">
                    <b-button-group>
                        <b-button variant="primary" @click="showModal()">Editar perfil</b-button>
                    </b-button-group>
                </div>
            </div>
            <div v-if="!show" class="spinner-container">
                <b-spinner class="m-5" label="Busy"></b-spinner>
            </div>
            <b-modal  v-if="show" size="xl" ref="modal-me-update" hide-footer  title="Editar perfil"
                header-bg-variant='primary'
                header-text-variant="secondary"
                body-bg-variant="blue"
                body-text-variant="secondary">
                <div>
                    <b-form>
                        <b-form-group id="input-group-1" label="Nome:">
                            <b-form-input
                                    id="input-1"
                                    type="email"
                                    v-model="dataForm.name"
                                    required
                                    placeholder="Novo nome"
                                    disabled
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="E-mail:">
                            <b-form-input
                                    id="input-2"
                                    type="email"
                                    v-model="dataForm.email"
                                    required
                                    placeholder="Novo e-mail"
                                    disabled
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Celular:">
                            <b-form-input
                                    id="input-3"
                                    type="text"
                                    v-model="dataForm.mobile"
                                    required
                                    placeholder="Novo número de celular"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-4" label="Cidade:">
                            <b-form-input
                                    id="input-4"
                                    type="text"
                                    v-model="dataForm.city"
                                    required
                                    placeholder="Cidade"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-5" label="Estado:">
                            <b-form-input
                                    id="input-5"
                                    type="text"
                                    v-model="dataForm.uf"
                                    required
                                    placeholder="Estado"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-6" label="Bairro:">
                            <b-form-input
                                    id="input-6"
                                    type="text"
                                    v-model="dataForm.district"
                                    required
                                    placeholder="Bairro"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Carregar nova foto de perfil:">
                            <div style="width: 100%; background-color: white; color: #303C54">
                                <picture-input
                                        v-if="show"
                                        width="300"
                                        height="200"
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
                        </b-form-group>
                        <b-button variant="primary">Salvar edições</b-button>
                    </b-form>
                </div>
            </b-modal>

        </div>
    </div>
</template>

<script>
    import headerNav from "../components/headerNav";
    import {mapActions, mapGetters} from 'vuex'
    import PictureInput from 'vue-picture-input'

    export default {
        name: "Profile",
        data() {
            return {
                show: false,
                dataForm: {
                    name: '',
                    email: '',
                    mobile: '',
                    city: '',
                    uf: '',
                    district: ''
                }
            }
        },
        components: {
            'header-nav': headerNav,
            'picture-input': PictureInput
        },
        methods: {
            ...mapActions(['loadMe']),
            async loadMeLocal() {
                const loadMe = await this.loadMe()
                if (loadMe == 200) {
                    this.show = true

                    //Foi efetuada uma copia para os dados da tela principal não sejam alterados, e foi copiado apenas o que interessa
                    const data = JSON.parse(JSON.stringify(this.getMeLocal))

                    this.dataForm.name = data.name
                    this.dataForm.mobile = data.mobile
                    this.dataForm.email = data.email
                    this.dataForm.city = data.city
                    this.dataForm.uf = data.uf
                    this.dataForm.district = data.district
                } else {
                    console.log(loadMe.status)
                }
            },
            showModal() {
                this.$refs['modal-me-update'].show()
                setTimeout( () => {
                    this.show = true;
                    window.dispatchEvent(new Event('resize'));
                })
            },
        },
        computed: {
            ...mapGetters({ getMeLocal : 'getMe'})
        },
        mounted() {
            this.loadMeLocal()
        },
    }
</script>

<style lang="scss" scoped>

    .main {
        height: 100%;
    }

    .container-dynamic {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .container-profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
            max-width: 1300px;
            height: 80%;
            margin-top: 20px;
            border-radius: 10px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.21);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.34);
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.24);

            .header-profile {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                width: 100%;
                height: 250px;
                background-color: white;
                .infos-user {
                    margin-top: 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    width: 100%;
                    height: 20%;
                }
                .profile-container-avatar {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 40%;
                    margin-top: -5%;
                    cursor: pointer;
                }
            }
            .body-profile {
                display: flex;
                flex-direction: column;
                padding: 10px;
                background-color: #303C54;
                align-items: flex-start;
                width: 100%;
                height: 40%;
            }
            .footer-profile {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                padding: 10px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                width: 100%;
                height: 250px;
                background-color: white;
            }
        }
    }
</style>
