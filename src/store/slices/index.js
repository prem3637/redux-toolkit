import { combineReducers } from "@reduxjs/toolkit";
import  userData  from "./UserData";

const rootReducer = combineReducers({
    users:userData
})
export default rootReducer;