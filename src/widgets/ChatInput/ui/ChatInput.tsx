import React, {useState} from 'react';
import cls from './ChatInput.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useAppSelector} from "shared/lib/redux/redux";
import useChat from "shared/lib/useChat/useChat";

export const ChatInput = () => {

    const {user} = useAppSelector(state => state.user)
    const {currentDialog, partnerId} = useAppSelector(state => state.dialogs)
    const {sender, userid} = currentDialog
    const {sendMessage} = useChat(currentDialog, user, partnerId)

    const [message, setMessage] = useState<string>('')

    const onChange = (value:string) => {
        setMessage(value)
    }

    const onSubmit = (event:any) => {
        console.log('event', event.key)
        if(event.key === 'Enter') {
            const data = {
                room:currentDialog,
                message:message,
                partner:user.id === sender ? userid : sender,
                id:currentDialog.convid,
            }
            sendMessage(data)
        }
    }



    return (
        <div className={classNames(cls.ChatInput, {}, [])}>
            <div className={cls.content}>
                <div className={cls.wrapper}>
                    <input
                        placeholder={'Введите сообщение...'}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyPress={(e) => onSubmit(e)}
                    />
                </div>
            </div>
        </div>
    );
};