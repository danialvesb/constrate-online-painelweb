<template>
    <b-card
      :header="data.id"
      header-tag="header"
      footer="Card Footer"
      footer-tag=""
      :title="data.text"
    >
      <b-button href="#" variant="primary">{{ data.qtd }}</b-button>
    </b-card>
</template>

<script>
    export default {
        name: "traffic",
        props: {
            color: {
                require: true
            },
            data: {
                require: true
            },

        }
    }
</script>

<style scoped lang="scss">
    @media screen and (max-width: 1070px) {
        .card-traffic {
            width: 100%!important;
        }
    }

    .card-traffic {
        outline: none;
        cursor: pointer;
        border: solid 1px;
        width: 25%;
        min-width: 200px!important;
    }

</style>
