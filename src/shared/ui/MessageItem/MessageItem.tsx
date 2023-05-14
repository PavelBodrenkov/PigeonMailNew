import React, {FC} from 'react';
import cls from "widgets/ChartList/ui/ChartList.module.scss";
import Read from "shared/assets/icons/Read/Read";
import {NoRead} from "shared/assets/icons/NoRead/NoRead";

interface MessageItemProps {
    avatar:string;
    name:string;
    message:string;
    time:string;
    read:boolean;
}

export const MessageItem:FC<MessageItemProps> = (props) => {
    const {avatar, name, message, time, read} = props
    return (
        <div className={cls.container}>
            <div className={cls.avatar}>{avatar}</div>
            <div className={cls.content}>
                <div className={cls.content__name}>{name}</div>
                <div className={cls.content__message}>{message}</div>
            </div>
            <div className={cls.time_content}>
                <div className={cls.time_content__time}>{time}</div>
                {read ? <Read height={20} width={15}/> : <NoRead height={15} width={12}/>}
            </div>
        </div>
    );
};