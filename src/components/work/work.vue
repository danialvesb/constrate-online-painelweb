<template>
    <div>

        <b-card class="m-1 p-1 card-container">
            <b-img src="https://placekitten.com/1000/300" class="img-fluid" width="500"></b-img>
            <strong>{{ work.title }}</strong>
            <b-card-text>
                {{ work.description }}
            </b-card-text>
            <b-button-group>
                <b-button variant="primary">Editar</b-button>
                <b-button variant="danger" @click="toggleModalDelete()">Excluir</b-button>
            </b-button-group>
        </b-card>
        <b-modal id="modal-delete" ref="modal-work-delete" hide-footer>
            <div class="d-block text-center">
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/scss/variables";
    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        .card-container {
            outline: none;
            cursor: pointer;
        }

    }
</style>
