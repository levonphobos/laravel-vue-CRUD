import EmployeeService from './../../../services/employee-service'
import router from "../../../router/router";

export default {
    getAllEmployees(ctx){
        EmployeeService.getAllEmployeesRequest().then(response=>{
            ctx.commit('allEmployeesList', response)
        });
    },

    addEmployee(ctx, data){
        EmployeeService.addEmployee(data).then(response=>{
            ctx.commit('addEmployee', response);
            router.push('/employees');
        })
    },

    getCurrentEmployee(ctx, id){
        EmployeeService.getCurrentEmployee(id).then(response=>{
            ctx.commit('currentEmployee', response)
        })
    },

    updateEmployee(ctx, data){
        EmployeeService.updateEmployee(data).then(response=>{
            ctx.commit('updateEmployee', response);
        })
    },

    deleteEmployee(ctx, id){
        EmployeeService.deleteEmployee(id).then(response=> {
            ctx.commit('deleteEmployee', response);
            router.push('/employees');
        })
    }

}
