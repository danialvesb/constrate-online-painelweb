<template>
    <div>
        <header-nav>
            <template v-slot:breadcrumb-item>
                <b-breadcrumb-item href="/dashboard">
                    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                    Início
                </b-breadcrumb-item>
                <b-breadcrumb-item href="/servicos">
                    <b-icon icon="person-lines-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                    Gerenciamento de usuários
                </b-breadcrumb-item>
            </template>
        </header-nav>
        <div class="container-a">
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
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import fields from "../helpers/tableManagementUsersFields";

    export default {
        name: "ManagementUsers",
        components: {
            'header-nav': headerNav
        },
        data() {
            return {
                perPage: 9,
                currentPage: 1,
                isBusy: true,
                isBusyReport: true,
                fields: fields
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
        },
        computed: {
            ...mapGetters({
                users: 'usersList',
            }),
            rows() {
                return this.users.length
            },
        },
        mounted() {
            this.loadUsersLocal()
        },
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/style";
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
    }
</style>
