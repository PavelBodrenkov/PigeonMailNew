import React from 'react';
import cls from './Settings.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export const Settings = () => {
    return (
        <div className={cls.Settings}>
            <div className={cls.theme_content}>
                <div>Темная тема</div>
                <ThemeSwitcher />
            </div>

        </div>
    );
};