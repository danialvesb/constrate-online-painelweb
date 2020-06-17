<template>
    <div>
        <h-nav/>
        <div class="container-a">
            <div class="sub-container-infors-cards">
                <b-card-group>
                    <card-traffic v-for="(item) in reports" v-bind:key="item.id" :data="item"/>
                </b-card-group>                
            </div>
            <div class="sub-container-infors-users">
                <div class="table-users">
                    <div>
                        <h3>Usuários</h3>
                    </div>
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
                                <b-spinner class="align-middle"/>
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
                isBusy: true,
                isBusyReport: true
            }
        },
        methods: {
            ...mapActions(['loadUsersData', 'loadReport']),
            async loadUsersLocal() {
                const result = await this.loadUsersData()
                if (result) {
                    this.isBusy = false
                }
            },
            toggleBusy() {
                if (this.users.length > 0 && this.isBusy == true) {
                    this.isBusy = !this.isBusy
                }
            },
            async loadReportLocal() {
                const result = await this.loadReport()
                if (result) {
                    this.isBusyReport = false
                }
            }
        },
        components: {
            'card-traffic': traffic,
            'h-nav': headerNav,
        },
        computed: {
            ...mapGetters({
                users: 'usersList',
                reports: 'getReport'
            }),
            rows() {
                return this.users.length
            },
        },
        mounted() {
            this.loadUsersLocal()
            this.loadReportLocal()
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/style";

    @media only screen and (max-width: 1070px){
        .sub-container-infors-cards {
            flex-direction: column!important;
        }
    }

    .container-a {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
        min-height: 1000px;
        margin: auto;
        .sub-container-infors-users {
            background-color: $white;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 95%;
            min-height: 400px;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.16);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.18);
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;

            .table-users {
                width: 98%;
                min-height: 400px;
                margin: 5px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                border-radius: 10px;
                div {
                    margin: 4px;
                }
            }
        }

        .sub-container-infors-cards {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 95%;
            
            flex-wrap: wrap;
            -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.21);
            -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.34);
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.24);
            margin-bottom: 20px;
            background-color: $white;
        }
    }

</style>
