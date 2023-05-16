import { Navigate, useLocation } from "react-router-dom";
import {useAppSelector} from "shared/lib/redux/redux";

//@ts-ignore
const PrivateRoute = ({ children }) => {
    const { isAuth } = useAppSelector(state => state.login)
    const location = useLocation();
    const url = new URLSearchParams();
    url.set("redirect", location.pathname + location.search);

    console.log('isAuth', isAuth)

    return isAuth ? (
        children
    ) : (
        <Navigate
            to={{
                pathname: "/login",
                search: url.toString(),
            }}
        />
    );
}

export default PrivateRoute