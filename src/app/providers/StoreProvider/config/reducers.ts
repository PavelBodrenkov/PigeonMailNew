import {combineReducers} from "@reduxjs/toolkit";
import {tabsReducer} from "entities/Tabs";


export default combineReducers({
    tabs:tabsReducer,
});