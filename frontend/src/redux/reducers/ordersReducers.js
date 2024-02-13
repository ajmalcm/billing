import { ALL_ORDER_FAIL, ALL_ORDER_REQUEST, ALL_ORDER_SUCCESS, CLEAR_ERRORS, NEW_ORDER_FAIL, NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS } from "../constants/orderConstants";



 const orderReducer=(state={},action)=>{
    switch(action.type)
    {
        case NEW_ORDER_REQUEST:
            return{
                ...state,
                loading:true,
                success:false,
                order:{}
            }
        case ALL_ORDER_REQUEST:
                return{
                    ...state,
                    loading:true,
                    success:false,
                    orders:[]
                }
        case NEW_ORDER_SUCCESS:
            return{
                loading:false,
                order:action.payload,
                success:true
            }
         case ALL_ORDER_SUCCESS:
                return{
                    loading:false,
                    orders:action.payload,
                    success:true
                }
        case NEW_ORDER_FAIL:
            case ALL_ORDER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            } 
        default:
            return state
    }
}

export default orderReducer;