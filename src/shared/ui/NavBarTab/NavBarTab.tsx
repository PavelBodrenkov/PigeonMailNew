import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "widgets/NavBar/ui/NavBar.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {tabKey} from "widgets/NavBar/ui/services";

interface NavBarTabProps {
    keyTarget:tabKey,
    Icon:any,
    name:string;
    handleActiveTab:(key:tabKey) => void;
    activeTab:tabKey;
}

const NavBarTab:FC<NavBarTabProps> = (props) => {
    const {theme} = useTheme();
    const {keyTarget, Icon, name, handleActiveTab, activeTab} = props

    return (
        <div
            className={classNames(cls.list_item, {[cls.active]: keyTarget === activeTab}, [])}
            onClick={() => handleActiveTab(keyTarget)}
        >
            <Icon
                width={47}
                height={47}
                stroke={theme === Theme.LIGHT ? '#292D32' : '#FFF'}
            />
            <div className={cls.name}>{name}</div>
        </div>
    );
};

export default NavBarTab;