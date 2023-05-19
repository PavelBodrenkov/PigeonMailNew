import {IUser} from "utils/api/models/IUser";

export interface initialStateType {
    user: IUser,
    isLoadingUser:boolean,
    isOnline:boolean
    errorUser:string
}