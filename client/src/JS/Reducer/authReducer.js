import { USER_REGISTER , USER_LOADING ,USER_LOGIN , USER_LOGOUT , AUTH_EERORS, GET_AUTH_USER } from "../Constant/auth-types";

const initialState = {
    token : localStorage.getItem('token'),
    user : null ,
    isAuth : false,
    isLoading:true
}

const authReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case USER_LOADING :
            return {...state , isLoading:true}
        case USER_LOGIN:
        case USER_REGISTER:
                localStorage.setItem('token',payload.token)
            return{...state , isLoading:false , isAuth:true, ...payload}

        case GET_AUTH_USER : 
            return {...state , isLoading:false , isAuth:true , ...payload}  
        case USER_LOGOUT:
            localStorage.removeItem('token');
            return {...state , isAuth:false ,user:null , token:null , isLoading:false }
        default:
            return state;
    }
}

export default authReducer