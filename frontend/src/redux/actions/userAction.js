import axios from "axios";
axios.defaults.baseURL='http://localhost:3999'
import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOGOUT_USER_FAIL,LOGOUT_USER_SUCCESS,REGISTER_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS } from "../constants/userConstants";

export const register=(userDetails)=>async(dispatch)=>{
try{
    dispatch({type:REGISTER_REQUEST});

    const config={
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials: true,
    }

    const {data}=await axios.post("/api/v1/register",userDetails,config);

    dispatch({type:REGISTER_SUCCESS,payload:data.user});

}
catch(err){
    dispatch({type:REGISTER_FAIL,payload:err.response.data.message})
}
}

export const login=(userData)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST})
        const config={
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials: true,
        }
        const {data}=await axios.post("/api/v1/login",userData,config);
        dispatch({type:LOGIN_SUCCESS,payload:data.user})
    }
    catch(err)
    {
        dispatch({type:LOGIN_FAIL,payload:err.response.data.message})
    }
}


export const loadUser=()=>async(dispatch)=>{
    try{
        dispatch({type:LOAD_USER_REQUEST});
        const {data}=await axios.get("/api/v1/me",{withCredentials:true});
        dispatch({type:LOAD_USER_SUCCESS, payload:data.user});
    }
    catch(err)
    {
        dispatch({type:LOAD_USER_FAIL,payload:err.response.data.message})
    }
}


export const logoutUser=()=>async(dispatch)=>{
    try{
        await axios.delete("/api/v1/logout",{withCredentials:true});
        dispatch({type:LOGOUT_USER_SUCCESS});
    }
    catch(err)
    {
        dispatch({type:LOGOUT_USER_FAIL,payload:err.response.data.message})
    }
}

export const clearErrors=()=>(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
}