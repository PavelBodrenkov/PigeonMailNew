import {IUser} from "utils/api/models/IUser";
import {createSlice} from "@reduxjs/toolkit";
import {login} from "../services/loginIn";

const initialState = {
    // user:{} as IUser,
    isAuth:false,
    isLoadingLogin:false,
    errorLogin:''
}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setIsAuth:(state, action) => {
            state.isAuth = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.isLoadingLogin = true
            })
            .addCase(login.fulfilled, (state) => {
                state.isLoadingLogin = false
                state.isAuth = true
                state.errorLogin = ''
            })
            .addCase(login.rejected, (state, action:any) => {
                state.isLoadingLogin = false
                state.isAuth = false
                state.errorLogin = action.payload.message
            })
    }
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice