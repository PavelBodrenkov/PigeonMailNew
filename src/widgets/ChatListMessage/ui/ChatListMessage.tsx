import React from 'react';
import cls from './ChatListMessage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChatMessage} from "shared/ui/ChatMessage/ChatMessage";

// const test = new Array(50).fill(1)

const test = [
    {
        isMe:true,
        message:'test1',
        read:false
    },
    {
        isMe:false,
        message:'test2',
        read:true
    }
]

export const ChatListMessage = () => {
    return (
        <div className={cls.ChatListMessage}>
            <div className={cls.message_container}>
                {test.map((item) => {
                    return (
                        <div className={classNames(cls.message, {[cls.isMe]: item.isMe}, [])}>
                            <ChatMessage item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};