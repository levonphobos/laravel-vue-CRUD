<template>
    <div>
        <h1 class="text-center pt-3 pr-3">Employee Tool
            <HomeBtn></HomeBtn>
            <div v-if="this.$route.path === '/' && !getUser.loggedIn" class="float-right mr-5">
                <LoginBtn></LoginBtn>
                <RegisterBtn></RegisterBtn>
            </div>
            <div v-if="getUser.loggedIn" class="float-right ml-2">
                <Logout></Logout>
            </div>
            <div v-if="this.$route.path !== '/'" class="float-right">
                <BackBtn></BackBtn>
            </div>
        </h1>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import BackBtn from "./components/BackBtn";
    import LoginBtn from "./components/LoginBtn";
    import RegisterBtn from "./components/RegisterBtn";
    import HomeBtn from "./components/HomeBtn";
    import Logout from "./components/Logout";
    import {mapGetters} from 'vuex'

    export default {
        name: "Layout",

        components: {
            BackBtn,
            LoginBtn,
            RegisterBtn,
            HomeBtn,
            Logout
        },

        computed:{
            ...mapGetters({
                getUser:'User/getUser'
            })
        }


    }
</script>

<style scoped>

</style>
