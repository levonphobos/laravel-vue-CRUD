<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form @submit.prevent="login()">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input v-model="loginData.username" type="text" class="form-control" id="username"
                               required>
                    </div>
                    <div class="form-group">
                        <label for="pass">Password</label>
                        <input v-model="loginData.password" type="password" class="form-control"
                               id="pass" minlength="6" required>
                    </div>
                    <router-link to="/register">Create Account</router-link>
                    <button type="submit" class="btn btn-primary float-right">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginData: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('User/login', this.loginData);
            }
        }
    }
</script>

<style scoped>

</style>
