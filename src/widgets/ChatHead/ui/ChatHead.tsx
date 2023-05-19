import React from 'react';
import cls from './ChatHead.module.scss';
import {useAppSelector} from "shared/lib/redux/redux";

export const ChatHead = () => {

    const {isOnline, user} = useAppSelector(state => state.user)

    return (
        <div className={cls.ChatHead}>
            <div className={cls.transition}>
                <div className={cls.wrapper}>
                    <div className={cls.content}>
                        <div>{user.fullname}</div>
                        <div>{isOnline ? 'online' : 'offline'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};