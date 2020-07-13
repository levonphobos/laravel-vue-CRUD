export default {
    allEmployeesList(state,employees){
        state.employees = employees;
    },

    addEmployee(state,lastEmployee){
        state.employees.push(lastEmployee);
    },

    currentEmployee(state, currentEmployeeData){
        state.currentEmployee = currentEmployeeData;
    },

    deleteEmployee(state, id){
        state.employees = state.employees.filter(employee => employee.id !== id);
    },

    updateEmployee(state, updatedEmployee){
        let initEmployee = state.employees.findIndex(init => init.id === updatedEmployee.id);
        state.employees.slice(initEmployee, 1 ,updatedEmployee);
    }
}
