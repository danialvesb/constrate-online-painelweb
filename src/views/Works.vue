<template>
    <div>
        <header-nav></header-nav>
        <div class="container-a">
            <work v-for="work in works" :key="work.id" :work="work"></work>
        </div>
    </div>
</template>

<script>
    import header from "../components/headerNav";
    import work from "../components/work/work";
    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name: "Works",
        components: {
            'header-nav': header,
            'work': work
        },
        methods: {
            ...mapActions(['loadWorksData']),
            loadWorksDataLocal() {
                this.loadWorksData()
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
</style>
