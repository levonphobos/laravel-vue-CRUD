import actions from './employee/actions';
import mutations from './employee/mutations';
import getters from './employee/getters';

const state = {
    employees: [],
    currentEmployee:null,
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
