<template>
    <div>
        <AddEmployee></AddEmployee>
        <div class="container-fluid">
            <div class="row" v-for="chunk in productChunks">
                <div class="col-md-6 is-one-quarter mb-3" v-for="employee in chunk">
                    <router-link :to="'/employees/'+ employee.id">
                        <div class="card mb-3 shadow bg-white rounded m-auto" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img v-if="employee.photo" :src="'storage/uploads/' + employee.photo"
                                         class="card-img"
                                         alt="Employee Avatar">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{{employee.name}} {{employee.lastname}}</h5>
                                        <p class="card-text">Email - {{employee.email}}</p>
                                        <p class="card-text"><small class="text-muted">Phone -
                                            {{employee.phone}}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row justify-content-center" v-if="!(employees.length > 0)">
                <div class="col-md-4 mt-5">
                    <h2 class="text-muted">Employees Doesn't Exist</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import AddEmployee from "../components/AddEmployee";

    export default {
        name: "Employees",
        components: {AddEmployee},
        mounted() {
            this.$store.dispatch('Employee/getAllEmployees');
        },

        computed: {
            productChunks() {
                return _.chunk(Object.values(this.employees), 2);
            },
            ...mapGetters({
                employees: 'Employee/getEmployees'
            })
        }
    }
</script>

<style scoped>

</style>
