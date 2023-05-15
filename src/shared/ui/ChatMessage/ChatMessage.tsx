import React, {FC} from 'react';
import cls from './ChatMessage.module.scss';
import Read from "shared/assets/icons/Read/Read";
import {NoRead} from "shared/assets/icons/NoRead/NoRead";
import {classNames} from "shared/lib/classNames/classNames";

interface ChatMessageProps {
    item: {
        isMe: boolean,
        message: string
        read: boolean
    }
}

export const ChatMessage: FC<ChatMessageProps> = (props) => {
    const {isMe, message, read} = props.item
    return (
        <div className={classNames(cls.ChatMessage, {[cls.isMeBg]:isMe}, [])}>
            <div className={cls.wrapper}>
                <div>{message}</div>
                <div className={cls.time_wrapper}>
                    <div className={cls.time}>12.26</div>
                    {!isMe && (read ? <Read height={20} width={15}/> : <NoRead height={20} width={15}/>)}
                </div>
            </div>
        </div>
    );
};