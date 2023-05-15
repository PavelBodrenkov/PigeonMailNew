import React from 'react';
import cls from './ChatPage.module.scss';
import {ChatHead} from "widgets/ChatHead";
import {ChatInput} from "widgets/ChatInput";
import {ChatListMessage} from "widgets/ChatListMessage";

export const ChatPage = () => {
    return (
        <div className={cls.ChatPage}>
            <ChatHead/>
            <div style={{width:'100%', height:'100%', overflow:'hidden'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', height:'100%', animationFillMode:'forwards !important'}}>
                    <ChatListMessage/>
                    <ChatInput/>
                </div>
            </div>
        </div>
    );
};