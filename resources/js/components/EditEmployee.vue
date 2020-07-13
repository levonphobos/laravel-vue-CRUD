<template>
    <div class="d-inline">
        <button type="button" class="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
            Edit
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Employee</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editSubmit" enctype="multipart/form-data">
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="employeeInitData.name" class="form-control" id="name"
                                       required>
                            </div>
                            <div class="form-group">
                                <label for="lastname">Last Name</label>
                                <input type="text" v-model="employeeInitData.lastname" class="form-control"
                                       id="lastname" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" v-model="employeeInitData.email" class="form-control" id="email"
                                       required>
                            </div>
                            <div class="form-group">
                                <label for="phone-number">Phone Number</label>
                                <input class="form-control" v-model="employeeInitData.phone" id="phone-number"
                                       type="tel" placeholder="099999999"
                                       pattern="0[0-9]{8}">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "EditEmployee",

        methods: {
            editSubmit() {
                $('#exampleModal').modal('hide');

                let obj = {
                    id: this.$route.params.id,
                    form: this.employeeInitData
                }
                this.$store.dispatch('Employee/updateEmployee', obj);
                this.$store.dispatch('Employee/getCurrentEmployee', this.$route.params.id);
            }
        },

        computed: {
            ...mapGetters({
                employeeInitData: 'Employee/getCurrentEmployee'
            })
        }
    }
</script>
