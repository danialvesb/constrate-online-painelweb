<template>
    <div>
        <header-nav>
            <template v-slot:breadcrumb-item>
                <b-breadcrumb-item href="/dashboard">
                    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                    Início
                </b-breadcrumb-item>
                <b-breadcrumb-item href="/servicos">
                    <b-icon icon="list-check" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                    Listagem de serviços
                </b-breadcrumb-item>
            </template>
        </header-nav>
        <div v-if="show" class="container-a">
            <b-card-group >
            <work v-for="work in works" :key="work.id" :work="work"></work>
            </b-card-group>
        </div>
        <div v-if="!show" class="container-b">
            <b-spinner class="m-5" label="Busy"></b-spinner>
        </div>
    </div>
</template>

<script>
    import header from "../components/headerNav";
    import work from "../components/work/work";
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "Works",
        components: {
            'header-nav': header,
            'work': work
        },
        data() {
            return {
                show: false
            }
        },
        methods: {
            ...mapActions(['loadWorksData']),
            async loadWorksDataLocal()  {
                await this.loadWorksData()
                this.show = !this.show
            }

        },
        computed: {
            ...mapGetters({works:'worksList'})
        },
        mounted() {
            this.loadWorksDataLocal()
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";
    .container-a {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 98%;
        margin: auto;
    }
    .container-b {
        display: flex;
        flex-direction: row;
        width: 95%;
        min-height: 800px;
        justify-content: center;
    }
</style>
