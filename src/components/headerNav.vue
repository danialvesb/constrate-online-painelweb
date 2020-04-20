<template>
    <div class="header-container">
        <div>
            <b-navbar variant="info" class="navbar-custom">
                <b-navbar-nav>
                    <div class="navbar-logo-item">
                        <b-nav-item href="/dashboard"><h5 class="nav-item-logo-text">Contrate Online</h5></b-nav-item>
                    </div>
                    <b-nav-item-dropdown text="Serviços" left variant="info">
                        <b-dropdown-item href="/servicos">Listar Serviços</b-dropdown-item>
                        <b-dropdown-item href="/servicos/cadastrar">Cadastrar Serviços</b-dropdown-item>
                        <b-dropdown-item href="/servicos/categorias">Categorias de Serviços</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            <b-avatar variant="info" class="m-0 p-0" src="https://placekitten.com/300/300"></b-avatar>
                        </template>
                        <b-dropdown-item href="#" >Perfil</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#">Configurações</b-dropdown-item>
                        <b-dropdown-item href="#" >Pagamentos</b-dropdown-item>
                        <b-dropdown-item href="#">Projetos</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#" >Sair</b-dropdown-item>
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
                <b-breadcrumb-item href="/servicos" >Serviços</b-breadcrumb-item>
                <b-breadcrumb-item href="/servicos/cadastrar" >Cadastrar Serviço</b-breadcrumb-item>
                <b-breadcrumb-item href="/servicos/categorias" >Categorias</b-breadcrumb-item>
                <b-breadcrumb-item href="/entrar" >Login</b-breadcrumb-item>
                <b-breadcrumb-item href="/signup" >Criar conta</b-breadcrumb-item>
            </b-breadcrumb>
        </div>
    </div>
</template>

<script>
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
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/style";

    .hidden {
        display: none;
    }
    div {
        div {
            .navbar-logo-item {
                border-radius: 5px;
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
