<template>
    <div class="container">
        <div class="card mb-3">
            <div class="row no-gutters m-auto" v-if="currentEmployee">
                <div class="col-md-4">
                    <img v-if="currentEmployee.photo" :src="'/storage/uploads/' + currentEmployee.photo"
                         class="card-img"
                         alt="Avatar">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{currentEmployee.name}} {{currentEmployee.lastname}}</h5>
                        <p class="card-text">Email - {{currentEmployee.email}}</p>
                        <p class="card-text"><small class="text-muted">Phone -
                            {{currentEmployee.phone}}</small>
                        </p>
                        <br><br><br>
                        <DeleteEmployee :idProp="currentEmployee.id"></DeleteEmployee>
                        <EditEmployee></EditEmployee>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import DeleteEmployee from "../components/DeleteEmployee";
    import EditEmployee from "../components/EditEmployee";

    export default {
        name: "CurrentEmployee",
        components: {
            DeleteEmployee,
            EditEmployee
        },

        mounted() {
            this.$store.dispatch('Employee/getCurrentEmployee', this.$route.params.id)
        },

        computed: {
            ...mapGetters({
                currentEmployee: 'Employee/getCurrentEmployee'
            })
        }
    }
</script>
