import { CLEAR_ERRORS, NEW_CUSTOMER_FAIL, NEW_CUSTOMER_REQUEST, NEW_CUSTOMER_SUCCESS } from "../constants/customerConstants"


const customerReducer=(state={customer:{}},action)=>{
    switch(action.type)
    {
        case NEW_CUSTOMER_REQUEST:
            return{
                loading:true,
                customer:null,
                ...state
            }
        case NEW_CUSTOMER_SUCCESS:
            return{
                loading:false,
                customer:action.payload
            }
        case NEW_CUSTOMER_FAIL:
            return{
                loading:false,
                error:action.payload,
                customer:null,
                ...state
            }
        case CLEAR_ERRORS:
            return{
                error:null,
                ...state
            }
        default:
        return state
    }
}

export default customerReducer;