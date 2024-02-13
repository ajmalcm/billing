import axios from "axios";
import { ALL_ORDER_REQUEST, ALL_ORDER_SUCCESS, CLEAR_ERRORS, NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS } from "../constants/orderConstants";

export const newOrder=(orderData)=>async(dispatch)=>{
    try{
        dispatch({type:NEW_ORDER_REQUEST});

        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data}=await axios.post("/api/v1/newOrder",orderData,config);

        dispatch({type:NEW_ORDER_SUCCESS,payload:data});

    }
    catch(err)
    {
        dispatch({type:NEW_ORDER_FAIL,payload:err.response.data.message})
    }
}

export const allOrders=()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_ORDER_REQUEST});

        const {data}=await axios.get("/api/v1/allOrders");

        dispatch({type:ALL_ORDER_SUCCESS,payload:data})

    }
    catch(err)
    {
        dispatch({type:ALL_ORDER_FAIL,payload:err.response.data.message})
    }
}

export const clearErrors=()=>(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}