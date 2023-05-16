import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthApi from "../../../../utils/api/logn";
import {loginProps} from "entities/Login/model/types/loginTypes";
import {userActions} from "entities/User";

const login = createAsyncThunk(
    'login/fetch',
    async (data: loginProps, thunkAPI) => {
        try {
            const response = await AuthApi.login(data.email, data.password)
            const {accessToken, user} = response.data
            localStorage.setItem('token', accessToken)
            thunkAPI.dispatch(userActions.setUser(user))
            return response.data
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.response.data.message,
                status: e.response.status
            })
        }
    }
)

export {
    login
}