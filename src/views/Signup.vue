<template>
    <div class="container-a">
        <div class="sub-container-a">
            <b-card
                    title="Criar conta"
                    class="card-container-a">
                <b-card-body>
                    <div>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group>
                                <b-form-input

                                        id="input-2"
                                        v-model="form.name"
                                        required
                                        placeholder="Nome de usuário"
                                        class="mb-1"
                                ></b-form-input>
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        placeholder="Insira seu e-mail"
                                        class="mb-1"
                                ></b-form-input>
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="password"
                                        required
                                        placeholder="Insira sua senha"
                                        class="mb-1"
                                ></b-form-input>
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="password"
                                        required
                                        placeholder="Confirme sua senha"
                                ></b-form-input>

                            </b-form-group>

                        </b-form>
                    </div>
                </b-card-body>
                <b-card-footer>
                    <b-button-group style="width: 100%">
                        <b-button type="submit" variant="success">Criar conta</b-button>
                    </b-button-group>
                </b-card-footer>
                <b-card-footer>
                    <b-button-group>
                        <b-button type="submit" variant="blue" class="btn-sm">Facebook</b-button>
                    </b-button-group>

                </b-card-footer>
            </b-card>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-a {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .sub-container-a {
            min-width: 90%;
            .card-container-a {
                min-width: 90%;
            }
        }
    }

</style>
