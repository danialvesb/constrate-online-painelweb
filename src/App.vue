<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {

    name: "App",
    components: {

    }
}

</script>

<style lang="scss">
    @import 'src/assets/scss/style';
    html, body {
        height: 100%;
        min-height: 100%;
        margin: 0;
    }
    .app {
        height: 100%;
        min-height: 100%;
        margin: 0;
    }


</style>
