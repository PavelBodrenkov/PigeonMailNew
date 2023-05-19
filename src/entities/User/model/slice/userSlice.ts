import {IUser} from "utils/api/models/IUser";
import {createSlice} from "@reduxjs/toolkit";
import {initialStateType} from "entities/User/model/types/userTypes";

const initialState: initialStateType = {
    user: {} as IUser,
    isOnline: false,
    isLoadingUser: false,
    errorUser: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsOnline:(state, action) => {
            state.isOnline = action.payload
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(login.pending, (state) => {
    //             state.isLoadingLogin = true
    //         })
    //         .addCase(login.fulfilled, (state) => {
    //             state.isLoadingLogin = false
    //             state.isAuth = true
    //         })
    //         .addCase(login.rejected, (state, action:any) => {
    //             state.isLoadingLogin = false
    //             state.isAuth = false
    //             state.error = action.payload.message
    //         })
    // }
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice