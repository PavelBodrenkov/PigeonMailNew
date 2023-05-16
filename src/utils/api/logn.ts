import {AuthResponse} from "utils/api/models/response/AuthResponse";
import {AxiosResponse} from 'axios'
import $api from "../../shared/lib/axios/axios";


export default class AuthApi {
    static async login(email:string, password:string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/signin', {email, password})
    }

    static async registration(fullname:string, email:string, password:string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/signup', {fullname, email, password})
    }

    static async logout():Promise<void> {
        return $api.post('/api/user/logout')
    }
}