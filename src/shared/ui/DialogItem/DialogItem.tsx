import React, {FC} from 'react';
import cls from "widgets/DialogList/ui/DialogList.module.scss";
import Read from "shared/assets/icons/Read/Read";
import {NoRead} from "shared/assets/icons/NoRead/NoRead";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface MessageItemProps {
    item: {
        avatar:string;
        name:string;
        message:string;
        time:string;
        read:boolean;
        id:number
    }
}

export const DialogItem:FC<MessageItemProps> = (props) => {
    const {avatar, name, message, time, read, id} = props.item
    return (
        <AppLink to={`/${id}`}>
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
        </AppLink>
    );
};