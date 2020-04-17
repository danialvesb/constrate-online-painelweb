<template>
    <div>
        <header-nav></header-nav>
        <div class="cards">
            <card-traffic></card-traffic>
            <card-traffic></card-traffic>
            <card-traffic></card-traffic>
        </div>

    </div>
</template>

<script>
    import header from "../components/header";
    import traffic from "../components/dashboard/content/cards/traffic";
    // import chart from "../components/dashboard/content/charts/chart";
export default {
    name: "Dashboard",
    components: {
        'card-traffic': traffic,
        'header-nav': header,
        // 'chart': chart
    }
}
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        flex-direction: column;

        .cards {
            display: flex;
            flex-direction: row;
            margin: auto;

        }
        .image-dashboard {
            display: flex;
            margin: auto;
            width: 95%;
            border-radius: 10px;
            max-height: 300px;
        }
    }


</style>
