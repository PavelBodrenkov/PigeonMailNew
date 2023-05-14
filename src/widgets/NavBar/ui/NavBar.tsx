import React, {useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';
import {items, items2, tabKey} from "widgets/NavBar/ui/services";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import NavBarTab from "shared/ui/NavBarTab/NavBarTab";
import {useAppDispatch, useAppSelector} from "shared/lib/redux/redux";
import {tabsReducer} from "entities/Tabs";
import {tabsActions} from "entities/Tabs/model/slice/tabsSlice";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {

    const dispatch = useAppDispatch()

    const {activeTab} = useAppSelector(state => state.tabs)

    const handleActiveTab = useCallback((key: tabKey) => {
        dispatch(tabsActions.setTabs(key))
    }, [dispatch])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.list}>
                    {items.map((item) => {
                            const {Icon, name, key} = item
                            return (
                                <NavBarTab
                                    key={key}
                                    keyTarget={key}
                                    Icon={Icon}
                                    name={name}
                                    handleActiveTab={handleActiveTab}
                                    activeTab={activeTab}
                                />
                            )
                        }
                    )}
                </div>
                <div className={cls.list}>
                    {items2.map((item) => {
                            const {Icon, name, key} = item
                            return (
                                <NavBarTab
                                    key={key}
                                    keyTarget={key}
                                    Icon={Icon}
                                    name={name}
                                    handleActiveTab={handleActiveTab}
                                    activeTab={activeTab}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
};