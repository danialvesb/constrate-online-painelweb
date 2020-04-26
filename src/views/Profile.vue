<template>
    <div class="container-1">
        <header-nav></header-nav>
        <div class="sub-container-1">
            <div v-if="show" class="container-profile">
                <div class="sub-container-profile">
                    <div class="profile-container-avatar">
                        <div class="profile-avatar-icon">
                        </div>
                    </div>
                    <div class="infos-user">
                        <h5>{{ data.name }}</h5>
                    </div>
                    <div class="infos-user-details">
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

    .container-1 {
        height: 100%;

        .sub-container-1 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;

            .container-profile {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 90%;
                height: 100%;
                margin-top: 50px;

                .sub-container-profile {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 90%;
                    height: 40%;
                    background-color: white;
                    border-radius: 10px;
                    -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.21);
                    -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.34);
                    box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.24);

                    .infos-user {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 50%;
                        height: 20%;
                    }

                    .infos-user-details {
                        display: flex;
                        padding: 10px;
                        background-color: #303C54;
                        flex-direction: column;
                        align-items: flex-start;
                        width: 100%;
                        height: 60%;
                    }

                    .profile-container-avatar {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        background-color: white;
                        -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.21);
                        -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.34);
                        box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.24);
                        width: 150px;
                        height: 40%;
                        margin-top: -5%;
                        border-radius: 150px;

                        .profile-avatar-icon {
                            width: 50px;
                            height: 20px;
                            background-image: url("../assets/images/avatars/1.jpg");
                            background-repeat: no-repeat;
                            background-size: cover;
                            background-position: center center;

                        }
                    }
                }
            }
        }
    }

</style>
