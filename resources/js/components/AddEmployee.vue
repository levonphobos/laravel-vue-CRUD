<template>
    <div>
        <router-link to="/employees/create">
            <button type="button" class="btn btn-success employee-add"><font-awesome-icon icon="user-plus"/></button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "AddEmployee"
    }
</script>
