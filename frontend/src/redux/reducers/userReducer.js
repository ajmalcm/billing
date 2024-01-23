import { REGISTER_FAIL,LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,REGISTER_REQUEST,REGISTER_SUCCESS,CLEAR_ERRORS, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL } from "../constants/userConstants"

const userReducer=(state={user:{}},action)=>{
    switch(action.type)
    {
        case REGISTER_REQUEST:
            case LOGIN_REQUEST:
                case LOAD_USER_REQUEST:
            return{
                loading:true,
                isAuthenticated:false,
                ...state
            }
        case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                case LOAD_USER_SUCCESS:
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case REGISTER_FAIL:
            case LOGIN_FAIL:
                case LOAD_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
                user:null
            }
            case LOGOUT_USER_SUCCESS:
                return{
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    success:true
                }
        case LOGOUT_USER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return {...state}
    }
}

export default userReducer;