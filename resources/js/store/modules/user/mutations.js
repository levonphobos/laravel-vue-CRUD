export default {
    register(state) {
        state.user.loggedIn = true;
    },

    login(state){
        state.user.loggedIn = true;
    },

    logout(state){
        state.user.loggedIn = null;
    }
}
