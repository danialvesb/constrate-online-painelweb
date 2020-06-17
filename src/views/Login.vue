<template>
<!--    <b-img :img-src="require('../assets/images/login.jpg')" fluid >-->
        <div class="container-a">
            <div class="sub-container-a">
                <b-form v-if="show" class="form-container">
                    <h5 class="form-title">Contrate online</h5>
                    <b-form-group>
                        <b-input-group class="input-group-sty">
                            <template v-slot:prepend>
                                <b-icon class="form-input-icon" icon="envelope"/>
                            </template>
                            <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="E-mail"
                                    class="mb-1 form-input"
                            />
                        </b-input-group>
                    </b-form-group>
                    <b-form-group>
                        <b-input-group class="input-group-sty">
                            <template v-slot:prepend>
                                <b-icon class="form-input-icon" icon="lock-fill"/>
                            </template>
                            <b-form-input
                                    id="input-2"
                                    v-model="form.password"
                                    type="password"
                                    required
                                    class="form-input"
                                    placeholder="Senha"
                            />
                        </b-input-group>

                    </b-form-group>
                    <b-form-group>
                        <b-button-group class="container-fluid button-group">
                            <b-overlay
                                    :show="busyAuth"
                                    spinner-small
                                    spinner-variant="secondary"
                                    class="d-inline-block"
                            >
                                <b-button
                                        ref="button"
                                        variant="primary"
                                        @click="authUserLocal()"
                                >
                                    Entrar
                                </b-button>
                            </b-overlay>
                            <b-overlay
                                    :show="busySignup"
                                    spinner-small
                                    spinner-variant="secondary"
                                    class="d-inline-block"
                            >
                            <b-button @click="pushToSignup()" variant="info">Não tem conta?</b-button>
                            </b-overlay>
                        </b-button-group>
                    </b-form-group>
                </b-form>
            </div>
        </div>
<!--    </b-img>-->
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: 'daniel@gmail.com',
                    password: '12345678',
                },
                show: true,
                busyAuth: false,
                busySignup: false
            }
        },
        methods: {
            ...mapActions(['authUser']),
            async authUserLocal(){
                this.busyAuth = true
                const result = await this.authUser(this.form)

                if (result) {
                    this.$router.push('/dashboard')
                }
            },
            onReset() {
                this.form.email = ''
                this.form.password = ''
            },
            pushToSignup() {
                this.busySignup = true
                this.$router.push('/signup')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/style";
    @media only screen and (max-width: 900px) {
         .container-a {
             width:100%;
             .sub-container-a {
                 width:100%!important;

                 .form-container {
                     width: 100%!important;
                     padding: 10px!important;
                 }
                 .form-title {
                     color: $white;
                     padding: 5px;
                     border-radius: 10px;
                     width: 60% !important;
                     font-size: 25px!important;
                 }
                 .button-group {
                     border-radius: 5px;
                 }
             }
         }
    }

    .container-a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        width:100%;
        margin: auto;
        background-image: url("../assets/images/login.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        .sub-container-a {
            width:400px;
            .form-container {
                .input-group-sty {
                    .form-input {
                        background-color: rgba(51, 153, 255, 0.4) !important;
                        color: white;
                        border:none !important;
                        border-bottom-right-radius: 10px;
                        border-top-right-radius: 10px;
                        height: 50px;
                    }
                    .form-input-icon {
                        background-color: rgba(51, 153, 255, 0.4) !important;
                        border-bottom-left-radius: 10px;
                        border-top-left-radius: 10px;
                        border:none !important;
                        width: 50px;
                        height: 50px;
                        color: white;
                        padding: 10px;
                    }
                }
            }
            .form-title {
                color: $white;
                padding: 5px;
                border-radius: 10px;
                width: 40%;
            }
            .button-group {
                border-radius: 10px;
            }
        }
    }

</style>
