import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import ChatPage from "pages/ChatPage/ui/ChatPage";
import {LoginPage} from "pages/LoginPage";


export enum AppRoutes {
    LOGIN = 'login',
    MAIN = 'main',
    CHAT = 'chat',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]:'/login',
    [AppRoutes.CHAT]: '/:id',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.LOGIN]: {
        path:RoutePath.login,
        element:<LoginPage />
    },
    [AppRoutes.CHAT]: {
        path:RoutePath.chat,
        element:<ChatPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
