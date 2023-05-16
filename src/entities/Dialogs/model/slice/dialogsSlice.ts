import {IUser} from "utils/api/models/IUser";
import {createSlice} from "@reduxjs/toolkit";
import {initialStateType, itemDialogType} from "entities/Dialogs/model/types/dialogTypes";
import {action} from "@storybook/addon-actions";

const initialState:initialStateType= {
   dialogs:[],
    currentDialog:{} as itemDialogType,
    partnerId:0
}

const dialogsSlice = createSlice({
    name:'Dialogs',
    initialState,
    reducers:{
        setDialogs:(state, action) => {
            state.dialogs = action.payload
        },
        setCurrentDialog:(state, action) => {
            state.currentDialog = action.payload
        },
        setPartnerId:(state, action) => {
            state.partnerId = action.payload
        }
    },
})

export const {actions: dialogsActions} = dialogsSlice
export const {reducer: dialogsReducer} = dialogsSlice