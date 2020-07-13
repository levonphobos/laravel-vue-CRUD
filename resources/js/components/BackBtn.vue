<template>
    <button class="btn btn-primary" @click="back">Back</button>
</template>

<script>
    import router from "../router/router";

    export default {
        name: "BackBtn",
        methods:{
            back(){
                router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>
