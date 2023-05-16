import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig, RoutePath} from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from 'widgets/PageLoader';
import BG from "shared/assets/img/background-chat-vk-75.jpg";
import PrivateRoute from "app/providers/router/ui/PrivateRoute";
import {LoginPage} from "pages/LoginPage";
import GuestRoute from "app/providers/router/ui/GuestRoute";
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {Layout} from "widgets/Layout";
import ChatPage from "pages/ChatPage/ui/ChatPage";

const AppRouter = () => (
    <Routes>
        <Route
            path={routeConfig.login.path}
            element={(
                <GuestRoute>
                    <Suspense fallback={<PageLoader/>}>
                        <LoginPage/>
                    </Suspense>
                </GuestRoute>
            )}
        />
        <Route path={routeConfig.main.path} element={
            <PrivateRoute>
                <Layout/>
            </PrivateRoute>
        }>
            <Route path={'/'} element={
                <PrivateRoute>
                    <Suspense fallback={<PageLoader/>}>
                        <MainPage/>
                    </Suspense>
                </PrivateRoute>
            }>
                <Route path={routeConfig.chat.path} element={
                    <PrivateRoute>
                        <Suspense fallback={<PageLoader/>}>
                            <ChatPage/>
                        </Suspense>
                    </PrivateRoute>
                }/>
            </Route>
        </Route>
        <Route
            path={routeConfig.not_found.path}
            element={(
                <NotFoundPage/>
            )}
        />
    </Routes>
    // <Routes>
    //     {Object.values(routeConfig).map(({ path, element }) => (
    //         path !== RoutePath.login &&
    //         <Route
    //             key={path}
    //             path={path}
    //             element={(
    //                 <PrivateRoute>
    //                     <Suspense fallback={<PageLoader />}>
    //                         <div className="page-wrapper" style={{backgroundImage:`url(${BG})`}}>
    //                             {element}
    //                         </div>
    //                     </Suspense>
    //                 </PrivateRoute>
    //             )}
    //         />
    //     ))}
    // </Routes>
);

export default AppRouter;
