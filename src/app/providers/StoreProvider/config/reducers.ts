import {combineReducers} from "@reduxjs/toolkit";
import {tabsReducer} from "entities/Tabs";
import {loginReducer} from "entities/Login/model/slice/loginSlice";
import {userReducer} from "entities/User";
import {dialogsReducer} from "entities/Dialogs";


export default combineReducers({
    tabs:tabsReducer,
    login:loginReducer,
    user:userReducer,
    dialogs:dialogsReducer
});