<template>
    <div class="container-a">
        <div class="sub-container-a">
            <div class="form-container">
                <h4>Login</h4>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                    <div class="footer">
                        <b-button type="submit" variant="primary">Entrar</b-button>
                        <b-button type="submit" href="/signup" variant="primary">Não tem conta?</b-button>
                    </div>
                </b-form>
            </div>

        </div>
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
    .container-a {
        background-color: $gray-300;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        .sub-container-a {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 90%;
            min-height: 150px;
            background-color: $white;
            border: solid 1px $gray-900;
            .form-container {
                width: 100%;
                padding: 20px;
                .footer {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }

        }
    }

</style>
