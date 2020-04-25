<template>
<!--    <b-img :img-src="require('../assets/images/login.jpg')" fluid >-->
        <div class="container-a">
            <div class="sub-container-a">
                <b-form v-if="show" class="form-container">
                    <h5 class="form-title">Contrate online</h5>
                    <b-form-group>
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Insira o e-mail"
                                class="mb-1"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                                id="input-2"
                                v-model="form.password"
                                type="password"
                                required
                                placeholder="Insira a senha"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-button-group class="container-fluid button-group">
                            <b-button type="submit" variant="primary">Entrar</b-button>
                            <b-button type="submit" href="/signup" variant="info">Não tem conta?</b-button>
                        </b-button-group>
                    </b-form-group>
                </b-form>
            </div>
        </div>
<!--    </b-img>-->
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
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
            width:30%;
            .form-title {
                background-color: $primary;
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
