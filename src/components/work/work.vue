<template>
    <div class="container-work">
        <b-card class="m-1 p-1 card-container">
            <strong>{{ work.title }}</strong>
            <b-card-text>
                {{ work.description }}
            </b-card-text>
            <b-card-body >
                <div class="p-2 m-2 details-card">
                    <b-img :src=imageUrl class="img-fluid" width="500"></b-img>
                </div>
                <!-- <div class="p-2 m-2 details-card">
                    <div>
                        <small>Categorias: ww</small>
                    </div>
                    <div>
                        <small>Ofertas ativas nesse serviço: 20</small>
                    </div>
                </div> -->
            </b-card-body>
            <div class="button-group">
                    <!-- <b-button variant="primary" class="button-style">Editar</b-button> -->
                    <b-button variant="danger" class="button-style" @click="toggleModalDelete()">Excluir</b-button>
            </div>

        </b-card>
        <b-modal id="modal-delete" ref="modal-work-delete" hide-footer>
            <div class="d-block text-center">
                <small>Lembre-se, não é possível excluir seviços que tenha ofertas</small>
                <h3>Confirmar apagar serviço?</h3>
            </div>
            <b-button class="mt-3" variant="danger" block @click="onClickDeleteWorkLocal()">Apagar</b-button>
            <b-button class="mt-2" variant="warning" block @click="hideModal">Cancelar</b-button>
        </b-modal>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'


    export default {
        name: "work",
        props: {
            work: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                imageUrl: `http://192.168.3.103:8000/api/services/_image/services/${this.work.image_path}`
            }
        },
        methods: {
            ...mapActions(['removeWork']),
            hideModal() {
                this.$refs['modal-work-delete'].hide()
            },
            toggleModalDelete() {
                this.$refs['modal-work-delete'].toggle('#toggle-btn')
            },
            onClickDeleteWorkLocal() {
                this.removeWork(this.work.id)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";
    .container-work {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        max-height: 300px!important;
        min-width: 500px;
        width: 20%;

        .card-container {
            display: flex;
            width: 98%;
            cursor: pointer;
        }
    }
    .details-card {
        border-radius: 5px;
        box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.11);
    }
    .button-group {
        display: flex;
        flex-direction:row;
        justify-content: left;
        width: 50%;
    }
    .button-style {
        width: 40%;
        margin-left: 5px;
    }
</style>
