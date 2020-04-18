<template>
    <div class="container-a">
        <div class="sub-container-a">
            <div class="form-container">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                            description="We'll never share your email with anyone else.">
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.name"
                                required
                                placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </div>
            <div class="options-container">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
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
            min-height: 100px;
            background-color: $white;
            border: solid 1px $gray-900;
            .form-container {
                width: 50%;
            }
            .options-container {
                width: 50%;
                background-color: $primary;
            }
        }
    }

</style>
