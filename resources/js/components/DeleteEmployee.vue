<template>
    <button @click="deleteEmployee" type="button" class="btn btn-danger">Delete</button>
</template>

<script>
    export default {
        name: "DeleteEmployee",
        props: ['idProp'],
        methods:{
            deleteEmployee(){
                this.$store.dispatch('Employee/deleteEmployee', this.idProp);
            }
        }
    }
</script>
