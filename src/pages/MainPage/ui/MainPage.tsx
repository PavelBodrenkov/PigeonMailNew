import React from 'react';
import cls from './MainPage.module.scss'
import {Outlet} from 'react-router-dom';
import BG from '../../../shared/assets/img/background-chat-vk-75.jpg';

const MainPage = () => {
    console.log('test')
    return (
        <div
            className={cls.MainPage}
            style={{backgroundImage: `url(${BG})`}}
        >
            <Outlet/>
        </div>
    );
};

export default MainPage;