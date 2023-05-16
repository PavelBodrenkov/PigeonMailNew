import {FC} from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import {useAppSelector} from "shared/lib/redux/redux";



const GuestRoute:FC<any> = ({ children, ...rest }) => {

    const { isAuth } = useAppSelector(state => state.login)

    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));

    return isAuth ? <Navigate to={url.get("redirect") || "/"} /> : children;
}

export default GuestRoute;