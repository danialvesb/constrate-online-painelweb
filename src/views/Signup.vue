<template>
    <div class="container-a">
        <div class="sub-container-a">
            <b-card
                title="Criar conta"
                class="card-container-a">
                <b-card-body>
                    <div>
                        <b-form>
                            <b-form-group>
                                <b-form-group label="Nome de usuário">
                                    <b-form-input
                                            id="input-1"
                                            v-model="form.name"
                                            required
                                            placeholder="Nome de usuário"
                                            class="mb-1"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group label="E-mail">
                                    <b-form-input
                                            id="input-2"
                                            v-model="form.email"
                                            type="email"
                                            placeholder="Insira seu e-mail"
                                            class="mb-1"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group label="Senha">
                                    <b-form-input
                                            id="input-3"
                                            v-model="form.password"
                                            type="password"
                                            required
                                            placeholder="Insira sua senha"
                                            class="mb-1"
                                    ></b-form-input>
                                    <b-form-input
                                            id="input-4"
                                            v-model="form.password"
                                            type="password"
                                            required
                                            placeholder="Confirme sua senha"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group label="Selecione o grupo de usuário">
                                    <b-form-select
                                            id="input-5"
                                        v-model="form.groups_id"
                                        :options="options"
                                        required>
                                    </b-form-select>
                                </b-form-group>
                            </b-form-group>
                        </b-form>
                    </div>
                </b-card-body>
                <b-card-footer>
                    <b-button-group style="width: 100%">
                        <b-button type="submit" variant="success" @click="addUser(form)">Criar conta</b-button>
                    </b-button-group>
                </b-card-footer>
                <b-card-footer>
                    <b-button-group>
                        <b-button type="submit" variant="blue" class="btn-sm">Facebook</b-button>
                    </b-button-group>
                </b-card-footer>
            </b-card>
        </div>
        <div class="container-alert">
            <b-alert
                    :show="dismissCountDown"
                    dismissible
                    fade
                    variant="danger"
                    @dismiss-count-down="countDownChanged"
            >
                Não foi possível criar conta, revise as informações!
            </b-alert>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Vue from "vue";

    export default {
        name: "Signup",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    groups_id: null
                },
                options: [{ text: 'Selecione um grupo', value: null }],
                dismissSecs: 5,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
            ...mapActions(['loadGroupsUsers']),
            mapOptionsGroups() {
                let optionsLocal = this.groupsList.map( item => {
                    return {
                        value: item.id,
                        text: item.name,
                    }
                })
                this.options = this.options.concat(optionsLocal)
            },
            addUser(user) {
                const userJson  = JSON.stringify(user)

                Vue.prototype.$http.post('/signup', userJson).then(async res => {
                    if( res.status == 201 ) {
                        this.$router.push('/entrar')
                    }else {
                        console.log(res.status)
                    }
                }).catch(err => {
                    console.log(err)
                    this.showAlert()
                })
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        },
        computed: {
            ...mapGetters({ groupsList : 'groupsList'})
        },
        mounted() {
            this.loadGroupsUsers()
            setTimeout(() => {
                this.mapOptionsGroups()
            }, 500)
        }
    }
</script>

<style lang="scss" scoped>
    @media only screen and (min-device-width: 900px) {
        .container-a {
            width:45%;
            margin: auto;
        }
    }

    .container-a {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .sub-container-a {
            min-width: 90%;
            .card-container-a {
                min-width: 90%;
            }
        }
        .container-alert {
            position: absolute;
            bottom: 0;
            right: 0;
            margin: 20px;
        }
    }

</style>
