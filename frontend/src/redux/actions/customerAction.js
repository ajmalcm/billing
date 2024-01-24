import axios from "axios";
axios.defaults.baseURL='http://localhost:3999';
import { CLEAR_ERRORS, NEW_CUSTOMER_FAIL, NEW_CUSTOMER_REQUEST, NEW_CUSTOMER_SUCCESS } from "../constants/customerConstants";


export const registerCustomer=(customerData)=>async(dispatch)=>{
try{
    dispatch({type:NEW_CUSTOMER_REQUEST})

    const config={
        headers:{"Content-Type":"application/json"}
    }

    const {data}=await axios.post("/api/v1/newCustomer",customerData,config);

    dispatch({type:NEW_CUSTOMER_SUCCESS,payload:data.customer});

}
catch(err)
{
    dispatch({type:NEW_CUSTOMER_FAIL,payload:err.response.data.message})
}

}

export const clearErrors=()=>(dispacth)=>{
        dispacth({type:CLEAR_ERRORS})
}