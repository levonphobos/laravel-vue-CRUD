import AuthService from './../../../services/auth-service';
import router from "../../../router/router";


export default {
    register(ctx, data){
        AuthService.register(data).then(response=> {
            localStorage.setItem('token', response.password);
            ctx.commit('register');
            router.push('/')
        })
    },

    login(ctx,data){
        AuthService.login(data).then(response =>{
            localStorage.setItem('token', response.password);
            ctx.commit('login');
            if(router.currentRoute.query.nextUrl){
                router.push(`${router.currentRoute.query.nextUrl}`);
            }else{
                router.push('/');
            }
        })
    },

    logout(ctx){
        ctx.commit('logout');
        router.push("/").catch(()=>{});
    }
}
