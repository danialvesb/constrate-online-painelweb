<template>
    <div>
        <header-nav></header-nav>
        <div class="container-a">
            <div class="sub-container-infors">
                <div class="cards">
                    <card-traffic></card-traffic>
                    <card-traffic></card-traffic>
                    <card-traffic></card-traffic>
                    <card-traffic></card-traffic>
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
                        :items="items"
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
    import header from "../components/header";
    import traffic from "../components/dashboard/content/cards/traffic";
    // import chart from "../components/dashboard/content/charts/chart";
export default {
    name: "Dashboard",
    data() {
        return {
            perPage: 9,
            currentPage: 1,
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 40, first_name: 'Thor', last_name: 'MacDonald' },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
                { age: 29, first_name: 'Dick', last_name: 'Dunlap' },

            ]
        }
    },
    components: {
        'card-traffic': traffic,
        'header-nav': header,
        // 'chart': chart
    },
    computed: {
        rows() {
            return this.items.length
        }
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
