<template>
    <div>
        <h-nav></h-nav>
        <div class="container-a">
            <div class="sub-container-infors-cards">
                <div class="box-1">
                    <card-traffic :data="cards.cardUsers"></card-traffic>
                    <card-traffic :data="cards.cardServices"></card-traffic>
                    <card-traffic :data="cards.cardOffers"></card-traffic>
                    <card-traffic :data="cards.cardClients"></card-traffic>
                </div>
            </div>
            <div class="sub-container-infors-users">
                <div class="table-users">
                    <div>
                        <h3>Usuários</h3>
                    </div>
                    <b-form class="mr-4">
                        <b-form-input size="sm" class="mr-sm-1 mb-1" placeholder="Pesquisar"></b-form-input>
                    </b-form>
                    <b-table
                            hover
                            id="table-users"
                            :items="users"
                            :per-page="perPage"
                            :current-page="currentPage"
                            :fields="fields"
                            responsive
                            small
                            :busy="isBusy">
                        <template v-slot:table-busy>
                            <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                            </div>
                        </template>
                    </b-table>

                </div>
                <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="table-users"
                ></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headerNav from "../components/headerNav";
    import traffic from "../components/dashboard/content/cards/traffic";
    // import chart from "../components/dashboard/content/charts/chart";
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        name: "Dashboard",
        data() {
            return {
                perPage: 9,
                currentPage: 1,
                fields: [
                    {
                        key: 'id',
                        label: 'Id'
                    },
                    {
                        key: 'name',
                        label: 'Nome'
                    },
                    {
                        key: 'email',
                        label: 'E-mail'
                    },

                    {
                        key: 'city',
                        label: 'Cidade'
                    },
                    {
                        key: 'uf',
                        label: 'UF'
                    },
                    {
                        key: 'district',
                        label: 'Bairro'
                    }
                ],
                cards: {
                    cardUsers: {
                        qtd: 20,
                        text: 'Usuários online:',
                        id: "1"
                    },
                    cardServices: {
                        qtd: 20,
                        text: 'Total de serviços:',
                        id: "2"
                    },
                    cardOffers: {
                        qtd: 20,
                        text: 'Ofertas de serviços:',
                        id: "3"
                    },
                    cardClients: {
                        qtd: 20,
                        text: 'Clientes:',
                        id: "4"
                    },
                },
                isBusy: true,
            }
        },
        methods: {
            ...mapActions(['loadUsersData']),
            async loadUsersLocal() {
                const result = await this.loadUsersData()
                console.log(result)
                if (result) {
                    this.isBusy = false
                }
            },
            toggleBusy() {
                if (this.users.length > 0 && this.isBusy == true) {
                    this.isBusy = !this.isBusy
                }
            },
        },
        components: {
            'card-traffic': traffic,
            'h-nav': headerNav,
            // 'chart': chart
        },
        computed: {
            ...mapGetters({
                users: 'usersList'
            }),
            rows() {
                return this.users.length
            },
        },
        mounted() {
            this.loadUsersLocal()
        },
        updated() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/style";

    .container-a {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        min-height: 1000px;
        margin: auto;

        .sub-container-infors-users {
            background-color: $white;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 95%;
            min-height: 400px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.21);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.34);
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.24);
            margin-bottom: 20px;

            .table-users {
                width: 98%;
                min-height: 450px;
                margin: 5px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                border-radius: 10px;
                border: solid 1px rgba(48, 60, 84, 0.38);

                div {
                    margin: 4px;

                    h3 {
                        color: $black
                    }
                }
            }
        }

        .sub-container-infors-cards {
            display: flex;
            flex-direction: row;
            width: 95%;
            min-height: 400px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.21);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.34);
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.24);
            margin-bottom: 20px;
            background-color: $white;
            .box-1 {
                min-width: 100%;
                margin: 10px;
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;

            }

            .box-2 {
                min-width: 50%;
                margin: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                background-color: $white;
            }

        }
    }


</style>
