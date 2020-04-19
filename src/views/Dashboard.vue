<template>
    <div>
        <h-nav></h-nav>
        <div class="container-a">
            <div class="sub-container-infors">
                <div class="cards">
                    <card-traffic :data="cards.cardUsers"></card-traffic>
                    <card-traffic :data="cards.cardServices"></card-traffic>
                    <card-traffic :data="cards.cardOffers"></card-traffic>
                    <card-traffic :data="cards.cardClients"></card-traffic>
                </div>
                <div class="table-users">
                    <div>
                        <h3>Usuários</h3>
                    </div>
                    <b-form>
                        <b-form-input size="sm" class="mr-sm-2 mb-1" placeholder="Pesquisar"></b-form-input>
                    </b-form>
                    <b-table
                        hover
                        id="table-users"
                        :items="users"
                        :per-page="perPage"
                        :current-page="currentPage"
                        small></b-table>

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
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
export default {
    name: "Dashboard",
    data() {
        return {
            perPage: 9,
            currentPage: 1,
            cards: {
                cardUsers: {
                    qtd: 20,
                    text: 'Usuários online:'
                },
                cardServices: {
                    qtd: 20,
                    text: 'Total de serviços:'
                },
                cardOffers: {
                    qtd: 20,
                    text: 'Quantidade de ofertas de serviços:'
                },
                cardClients: {
                    qtd: 20,
                    text: 'Quantidae de clientes:'
                },

            }

        }
    },
    methods: {
        ...mapActions(['loadUsersData']),
        loadUsersLocal() {
            this.loadUsersData()
        }
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
        .sub-container-infors {
            background-color: $white;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90%;
            min-height: 600px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.93);
            margin-bottom: 20px;
            .cards {
                width: 95%;
                margin: 5px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .table-users {
                width: 95%;
                min-height: 450px;
                margin: 5px;
                display: flex;
                flex-direction: column;
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

    }


</style>
