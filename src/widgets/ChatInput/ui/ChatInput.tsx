import React from 'react';
import cls from './ChatInput.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export const ChatInput = () => {
    return (
        <div className={classNames(cls.ChatInput, {}, [])}>
            <div className={cls.content}>
                <div className={cls.wrapper}>
                    <input placeholder={'Введите сообщение...'}/>
                </div>
            </div>
        </div>
    );
};