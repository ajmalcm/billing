
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import customerReducer from "./customerReducer";
import orderReducer from "./ordersReducers";


const rootReducer=combineReducers({
    user:userReducer,
    customer:customerReducer,
    order:orderReducer
})

export default rootReducer;