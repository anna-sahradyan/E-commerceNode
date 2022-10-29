import {combineReducers} from "redux";
import cart from "../store/cartSlice";
const rootReducer = combineReducers({
    devTools: true,
    cart,
});
export default rootReducer;