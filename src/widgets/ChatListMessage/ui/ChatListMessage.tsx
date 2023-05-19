import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import cls from './ChatListMessage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChatMessage} from "shared/ui/ChatMessage/ChatMessage";
import useChat from "shared/lib/useChat/useChat";
import {useParams} from "react-router-dom";
import {useAppSelector} from "shared/lib/redux/redux";
import {io} from "socket.io-client";

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

function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
    const ref = React.useRef<HTMLDivElement>();
    React.useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [dep]);
    return ref;
}

export const ChatListMessage = () => {
    // const {id} = useParams()
    const {user} = useAppSelector(state => state.user)
    const {currentDialog, partnerId} = useAppSelector(state => state.dialogs)
    const {users, messages, log} = useChat(currentDialog.convid, user, partnerId)

    const bottomRef = useRef<any>()

    console.log('currentDialog', currentDialog)

    useEffect(() => {
        // bottomRef.current.scrollIntoView({
        //     behavior: 'smooth'
        // })
        if (bottomRef.current) {
            bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
        }
    }, [messages])

    const isMe = useCallback((sender:number) => {
            return user?.id === sender
    }, [user.id])

    console.log('messages', messages)

    const ref = useChatScroll(messages)

    return (
        <div className={cls.ChatListMessage}  ref={ref}>
            <div className={cls.message_container}>
                {messages?.map((item:any) => {
                    console.log('isMe', isMe(item.sender))
                    return (
                        <div className={classNames(cls.message, {[cls.isMe]: isMe(item.sender)}, [])}>
                            <ChatMessage item={item}  isMe={isMe(item.sender)}/>
                        </div>
                    )
                })}
                {/*<p ref={bottomRef} />*/}
            </div>
        </div>
    );
};