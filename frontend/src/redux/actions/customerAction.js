import axios from "axios";
axios.defaults.baseURL='http://localhost:3999';
import { CLEAR_ERRORS, NEW_CUSTOMER_FAIL, NEW_CUSTOMER_REQUEST, NEW_CUSTOMER_SUCCESS,ALL_CUSTOMERS_FAIL,ALL_CUSTOMERS_REQUEST,ALL_CUSTOMERS_SUCCESS } from "../constants/customerConstants";


export const registerCustomer=(customerData)=>async(dispatch)=>{
try{
    dispatch({type:NEW_CUSTOMER_REQUEST})

    const config={
        headers:{"Content-Type":"application/json"},
        withCredentials: true,
    }

    const {data}=await axios.post("/api/v1/newCustomer",customerData,config);

    dispatch({type:NEW_CUSTOMER_SUCCESS,payload:data.customer});

}
catch(err)
{
    dispatch({type:NEW_CUSTOMER_FAIL,payload:err.response.data.message})
}

}

export const getAllCustomers=()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_CUSTOMERS_REQUEST});
        const {data}=await axios.get("/api/v1/allCustomers",{withCredentials:true});

        dispatch({type:ALL_CUSTOMERS_SUCCESS,payload:data.customers});
    }
    catch(err)
    {
        dispatch({type:ALL_CUSTOMERS_FAIL,payload:err.response.data.message})
    }
}

export const clearErrors=()=>(dispacth)=>{
        dispacth({type:CLEAR_ERRORS})
}