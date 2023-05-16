import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthResponse} from "utils/api/models/response/AuthResponse";
import axios from "axios";
import {userActions} from "entities/User";
import {loginActions} from "entities/Login";


const fetchCheckAuth = createAsyncThunk(
    'checkAuth/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<AuthResponse>('http://localhost:8080/api/refresh', {withCredentials:true})
            const {accessToken, user} = response.data
            localStorage.setItem('token', accessToken)
            thunkAPI.dispatch(userActions.setUser(user))
            thunkAPI.dispatch(loginActions.setIsAuth(true))

            console.log('response', response)
            return response.data.user
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка при выходе')
        }
    }
)

export {
    fetchCheckAuth
}