<template>
    <div>
        <header-nav></header-nav>
        <div v-if="show" class="container-a">
            <work v-for="work in works" :key="work.id" :work="work"></work>
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
            //Adicionar sppinners
            ...mapActions(['loadWorksData']),
            async loadWorksDataLocal()  {
                await this.loadWorksData()
                console.log(JSON.stringify(this.works))
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
        flex-direction: column;
        width: 95%;
        min-height: 800px;
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
