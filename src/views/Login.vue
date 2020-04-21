<template>
    <div class="container-a">
        <b-card class="container-fluid">
            <b-card-header>
                <strong>Login</strong>
            </b-card-header>
            <b-card-body>
                <b-form v-if="show">
                    <b-form-group>
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                                class="mb-1"
                        ></b-form-input>
                        <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="Enter name"
                        ></b-form-input>

                    </b-form-group>

                </b-form>
            </b-card-body>
            <b-card-footer>
                <div style="display: flex; flex-direction: row; justify-content: space-between">
                    <b-button variant="primary">Entrar</b-button>
                    <b-button href="/signup" variant="primary">Não tem conta?</b-button>
                </div>
            </b-card-footer>
        </b-card>

    </div>
</template>

<script>
    export default {
        name: "Login",
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
    @import "src/assets/scss/style";
    @media only screen and (min-device-width: 900px) {
         .container-a {
             width:45%;
         }
    }

    .container-a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        margin: auto;
        .form-container {
            padding: 20px;
        }
    }

</style>
