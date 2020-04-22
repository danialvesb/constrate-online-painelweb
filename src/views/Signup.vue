<template>
    <div class="container-a">
        <div class="sub-container-a">
            <b-card
                title="Criar conta"
                class="card-container-a">
                <b-card-body>
                    <div>
                        <b-form>
                            <b-form-group>
                                <b-form-group label="Nome de usuário">
                                    <b-form-input
                                            id="input-1"
                                            v-model="form.name"
                                            required
                                            placeholder="Nome de usuário"
                                            class="mb-1"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group label="E-mail">
                                    <b-form-input
                                            id="input-2"
                                            v-model="form.email"
                                            type="email"
                                            required
                                            placeholder="Insira seu e-mail"
                                            class="mb-1"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group label="Senha">
                                    <b-form-input
                                            id="input-3"
                                            v-model="form.password"
                                            type="password"
                                            required
                                            placeholder="Insira sua senha"
                                            class="mb-1"
                                    ></b-form-input>
                                    <b-form-input
                                            id="input-4"
                                            v-model="form.password"
                                            type="password"
                                            required
                                            placeholder="Confirme sua senha"
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group label="Selecione o grupo de usuário">
                                    <b-form-select
                                            id="input-5"
                                        v-model="form.groups_id"
                                        :options="options"
                                        required>
                                    </b-form-select>
                                </b-form-group>
                            </b-form-group>
                        </b-form>
                    </div>
                </b-card-body>
                <b-card-footer>
                    <b-button-group style="width: 100%">
                        <b-button type="submit" variant="success" @click="addUser(form)">Criar conta</b-button>
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
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "Signup",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    groups_id: null
                },
                options: [{ text: 'Selecione um grupo', value: null }],
            }
        },
        methods: {
            ...mapActions(['loadGroupsUsers', 'addUser']),
            mapOptionsGroups() {
                let optionsLocal = this.groupsList.map( item => {
                    return {
                        value: item.id,
                        text: item.name,
                    }
                })
                this.options = this.options.concat(optionsLocal)
            }
        },
        computed: {
            ...mapGetters({ groupsList : 'groupsList'})
        },
        mounted() {
            this.loadGroupsUsers()
            setTimeout(() => {
                this.mapOptionsGroups()
            }, 500)
        }
    }
</script>

<style lang="scss" scoped>
    @media only screen and (min-device-width: 900px) {
        .container-a {
            width:45%;
            margin: auto;
        }
    }

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
