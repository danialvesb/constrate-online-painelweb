<template>
    <div>
        <header-nav></header-nav>
        <div class="container-a">
            <work></work>
            <work></work>
            <work></work>
            <work></work>
            <work></work>
        </div>
    </div>
</template>

<script>
    import header from "../components/header";
    import work from "../components/dashboard/content/cards/work";
    export default {
        name: "Works",
        components: {
            'header-nav': header,
            'work': work
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
