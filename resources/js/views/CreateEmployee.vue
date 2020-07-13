<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <form @submit.prevent="addEmployee()">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" v-model="name" class="form-control" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" v-model="lastname" class="form-control" id="lastname" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone-number">Phone Number</label>
                        <input class="form-control" v-model="phone" id="phone-number" type="tel" placeholder="099999999"
                               pattern="0[0-9]{8}">
                    </div>
                    <div class="form-group">
                        <label for="photo" class="upload-photo btn btn-primary">
                            <font-awesome-icon icon="upload"/>
                            Choose a photo</label>
                        <input type="file" @change="uploadPhoto" class="form-control" id="photo" required>
                        <img v-if="previewImg" :src="previewImg" alt="Your Image" class="img-thumbnail preview-img float-right"/>
                    </div>
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateEmployee",
        data() {
            return {
                name: null,
                lastname: null,
                email: null,
                phone: null,
                photo: null,
                previewImg: null
            }
        },

        methods: {
            addEmployee() {
                let form = new FormData;
                form.append('name', this.name);
                form.append('lastname', this.lastname);
                form.append('email', this.email);
                form.append('phone', this.phone);
                form.append('photo', this.photo);
                this.$store.dispatch('Employee/addEmployee', form);
            },

            uploadPhoto(e) {
                this.photo = e.target.files[0];
                let fileReader = new FileReader();
                    fileReader.onload = e => {
                        this.previewImg = String(e.target.result);
                    };
                    fileReader.readAsDataURL(e.target.files[0]);
            }
        }
    }
</script>
