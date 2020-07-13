<template>
    <router-link to="/">
        <button @click="logout" class="btn btn-primary">Logout</button>
    </router-link>
</template>

<script>
    export default {
        name: "Logout",
        methods:{
            logout(){
                localStorage.removeItem('token');
                this.$store.dispatch('User/logout')
            }
        }
    }
</script>

<style scoped>

</style>
