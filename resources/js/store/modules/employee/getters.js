export default {
    getEmployees(state) {
        return state.employees
    },

    getCurrentEmployee(state) {
        return {...state.currentEmployee}
    }

}
