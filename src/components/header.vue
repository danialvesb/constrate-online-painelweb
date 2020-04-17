<template>
    <div class="header-container">
        <div>
            <b-navbar variant="light" class="navbar-custon">
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <div class="navbar-logo-item">
                            <b-nav-item href="/dashboard" class="nav-item-logo"><h5 class="text-white">Contrate Online</h5></b-nav-item>
                        </div>
                        <b-nav-item-dropdown text="Serviços" left>
                            <b-dropdown-item href="/servicos">Listar Serviços</b-dropdown-item>
                            <b-dropdown-item href="/servicos/cadastrar">Cadastrar Serviços</b-dropdown-item>
                            <b-dropdown-item href="/servicos/categorias">Categorias de Serviços</b-dropdown-item>
                        </b-nav-item-dropdown>

                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">ES</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                            <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <em>User</em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div>
            <b-nav class="bg-light nav-custom">
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";

    div {
        div {
            box-shadow: 0px 1px rgba(107, 73, 202, 0.16);

            .navbar-logo-item {
                background-color: $cyan;
                border-radius: 5px;
                margin-right: 20px;

            }

        }

    }
    .header-container {
        margin-bottom: 3px;
    }
</style>
