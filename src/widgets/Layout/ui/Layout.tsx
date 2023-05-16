import React, {FC, ReactNode} from 'react';
import { Outlet } from 'react-router-dom';
import {NavBar} from "widgets/NavBar";
import {NavBarContent} from "widgets/NavBarContent";

export const Layout:FC<ReactNode> = ({children}) => {
    return (
        <div className="content-page">
            <NavBar/>
            <NavBarContent/>
            <Outlet />
        </div>
    );
};