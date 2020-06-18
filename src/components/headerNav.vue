<template>
    <div class="header-container">
        <div>
            <b-navbar variant="info" class="navbar-custom">
                <b-navbar-nav>
                    <div class="navbar-logo-item">
                        <b-nav-item href="/dashboard"><h5 class="nav-item-logo-text">Contrate Online</h5></b-nav-item>
                    </div>
                    <b-nav-item-dropdown text="Serviços" left variant="info" class="dropdown-style">
                        <b-dropdown-item href="/servicos">Listar Serviços</b-dropdown-item>
                        <b-dropdown-item href="/servicos/cadastrar">Cadastrar Serviços</b-dropdown-item>
                        <b-dropdown-item href="/servicos/categorias">Categorias de Serviços</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            <b-avatar variant="info" class="m-0 p-0" :src="urlImageProfile"></b-avatar>
                        </template>
                        <b-dropdown-item href="/usuario/perfil" >Perfil</b-dropdown-item>
                        <!-- <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#">Configurações</b-dropdown-item>
                        <b-dropdown-item href="#" >Pagamentos</b-dropdown-item>
                        <b-dropdown-item href="#">Projetos</b-dropdown-item> -->
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item @click="onclickLogout()">Sair</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <div>
            <b-breadcrumb>
                <b-breadcrumb-item href="/dashboard">
                    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                    Início
                </b-breadcrumb-item>
            </b-breadcrumb>
        </div>
    </div>
</template>

<script>
    import { setCookie } from "../helpers/cookie";
    import {getCookie} from "../helpers/cookie";

    export default {
        name: "h-nav",
        data() {
            return {
                items: [
                    {
                        text: 'Início',
                        href: '/dashboard',
                    },
                    {
                        text: 'Serviços',
                        href: '/servicos',
                    },
                    {
                        text: 'Cadastrar',
                        href: '/servicos/cadastrar',
                    },
                    {
                        text: 'Categorias',
                        href: '/servicos/categorias',
                    },
                    {
                        text: 'Início',
                    },
                ],
                urlImageProfile: `http://192.168.3.103:8000/api/me/_image/profile/${getCookie('photo_profile_path')}`
            }
        },
        methods: {
            onclickLogout() {
                setCookie('access_token', 'deleted')
                this.$router.push('/entrar')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/style";

    .hidden {
        display: none;
    }
    .navbar-custom {
        height: 50px;
    }
    div {
        div {
            .navbar-logo-item {
                margin-right: 20px;
                .nav-item-logo-text {
                    font-size: 15px;
                    border-bottom: solid 1px $white;
                }
            }
        }
    }
    .header-container {
        margin-bottom: 3px;
    }

</style>
