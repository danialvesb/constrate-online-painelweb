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
        background-color: rgb(182, 190, 206); 
        // background: radial-gradient(circle, rgba(237,239,247,1) 33%, rgba(189,183,217,1) 97%);
    }
    .app {
        height: 100%;
        min-height: 100%;
        margin: 0;
        
    }


</style>
