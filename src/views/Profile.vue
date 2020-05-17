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
                        <h5>{{ data.name }}</h5>
                    </div>
                </div>
                <div class="body-profile">
                    <span style="color: white">
                        E-mail: <strong>{{ data.email }}</strong>
                    </span>
                    <span style="color: white">
                        Celular: <strong>{{ data.mobile }}</strong>
                    </span>
                    <span style="color: white">
                        Cidade: <strong>{{ data.city }}</strong>
                    </span>
                    <span style="color: white">
                        UF: <strong>{{ data.uf }}</strong>
                    </span>
                    <span style="color: white">
                        Bairro: <strong>{{ data.district }}</strong>
                    </span>
                </div>
                <div class="footer-profile">
                    <b-button-group>
                        <b-button variant="primary">Editar perfil</b-button>
                    </b-button-group>
                </div>
            </div>
            <div v-if="!show" class="spinner-container">
                <b-spinner class="m-5" label="Busy"></b-spinner>
            </div>
        </div>

    </div>

</template>

<script>
    import Vue from "vue";
    import headerNav from "../components/headerNav";

    export default {
        name: "Profile",
        data() {
            return {
                data: null,
                show: false
            }
        },
        components: {
            'header-nav': headerNav
        },
        methods: {
            toggleBusy() {
                if (this.users.length > 0 && this.isBusy == true) {
                    this.isBusy = !this.isBusy
                }
            },
            me() {
                Vue.prototype.$http.post('auth/me').then(async res => {
                    if (res.status == 200) {
                        this.data = res.data
                        this.show = true
                    } else {
                        console.log(res.status)
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted() {
            this.me()
        }
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
