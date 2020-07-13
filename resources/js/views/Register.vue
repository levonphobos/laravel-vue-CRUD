<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form @submit.prevent="register()">
                    <div class="form-group">
                        <label for="usernameReg">Username</label>
                        <input v-model="authData.username" type="text" class="form-control" id="usernameReg" required>
                    </div>
                    <div class="form-group">
                        <label for="passReg">Password</label>
                        <input v-model="authData.password" type="password" class="form-control"
                               id="passReg" minlength="6" required>
                    </div>
                    <button type="submit" class="btn btn-primary float-right">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Register",
        data() {
            return {
                authData: {
                    username: '',
                    password: ''
                }
            }
        },

        methods: {
            register() {
                this.$store.dispatch('User/register', this.authData)
            }
        }
    }
</script>

<style scoped>

</style>
