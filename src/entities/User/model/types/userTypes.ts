import {IUser} from "utils/api/models/IUser";

export interface initialStateType {
    user: IUser,
    isLoadingUser:boolean,
    errorUser:string
}