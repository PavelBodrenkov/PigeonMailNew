import React from 'react';
import cls from './NavBarContent.module.scss';
import {Settings} from "widgets/Settings";
import {useAppSelector} from "shared/lib/redux/redux";
import {tabKey} from "widgets/NavBar/ui/services";
import {Chart} from "widgets/Chart";

export const NavBarContent = () => {

    const {activeTab} = useAppSelector(state => state.tabs)

    const renderContent = () => {
        switch (activeTab) {
            case tabKey.SETTINGS: {
                return <Settings/>
            }
            case tabKey.CHAT: {
                return <Chart />
            }
            default: {
                return <>test</>
            }
        }
    }

    return (
        <div className={cls.NavBarContent}>
            {renderContent()}
        </div>
    );
};
