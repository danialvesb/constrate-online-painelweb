<template>
<!--    <b-img :img-src="require('../assets/images/login.jpg')" fluid >-->
        <div class="container-a">
            <div class="sub-container-a">
                <b-form v-if="show" class="form-container">
                    <h5 class="form-title">Contrate online</h5>
                    <b-form-group>
                        <b-input-group class="input-group-sty">
                            <template v-slot:prepend>
                                <b-icon class="form-input-icon" icon="envelope"></b-icon>
                            </template>
                            <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="E-mail"
                                    class="mb-1 form-input"
                            ></b-form-input>

                        </b-input-group>
                    </b-form-group>
                    <b-form-group>
                        <b-input-group class="input-group-sty">
                            <template v-slot:prepend>
                                <b-icon class="form-input-icon" icon="lock-fill"></b-icon>
                            </template>
                            <b-form-input
                                    id="input-2"
                                    v-model="form.password"
                                    type="password"
                                    required
                                    class="form-input"
                                    placeholder="Senha"
                            >
                            </b-form-input>
                        </b-input-group>

                    </b-form-group>
                    <b-form-group>
                        <b-button-group class="container-fluid button-group">
                            <b-button variant="primary" @click="onClickAuth(form)">Entrar</b-button>
                            <b-button href="/signup" variant="info">Não tem conta?</b-button>
                        </b-button-group>
                    </b-form-group>
                </b-form>
            </div>
        </div>
<!--    </b-img>-->
</template>

<script>
    import Vue from "vue";

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: 'daniel@gmail.com',
                    password: '12345678',
                },
                show: true
            }
        },
        methods: {
            onClickAuth(user) {
                const userJson  = JSON.stringify(user)
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    }
                };

                Vue.prototype.$http.post('/auth/login', userJson, axiosConfig).then(async res => {
                    if( res.status == 200 ) {
                        this.setCookie('auth_token', res.data.access_token, 1)

                        console.log(res.data)

                        const  authToken  =  this.getCookie('auth_token')

                        if (authToken) {
                            console.log(`bearer ${authToken}`)
                            Vue.prototype.$http.defaults.headers.common['Authorization'] =  `bearer ${authToken}`
                            this.$router.push('/dashboard')
                        }

                    }else {
                        console.log(res.status)
                    }
                }).catch(err => {
                    console.log(err)
                    this.showAlert()
                })
            },
            setCookie(cookieName, cookieValue, expireDays) {
                let d = new Date()
                d.setTime(d.getTime() + (expireDays*24*60*60*1000))
                let expires = `expires = ${d.toUTCString()}`

                document.cookie = `${cookieName} = ${cookieValue}; ${expires} ;path=/`
            },
            getCookie(cookieName) {
                let name = cookieName + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
            return "";
            },
            onReset() {
                this.form.email = ''
                this.form.password = ''
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
