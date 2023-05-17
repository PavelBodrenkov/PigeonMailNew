import React, {useState} from 'react';
import cls from './ChatInput.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useAppSelector} from "shared/lib/redux/redux";
import useChat from "shared/lib/useChat/useChat";

export const ChatInput = () => {

    const {user} = useAppSelector(state => state.user)
    const {currentDialog, partnerId} = useAppSelector(state => state.dialogs)
    const {sender, userid} = currentDialog
    const {sendMessage} = useChat(currentDialog.convid, user, partnerId)
    console.log('currentDialog', currentDialog)
    console.log('partnerId', partnerId)

    const [message, setMessage] = useState<string>('')

    const onChange = (value:string) => {
        setMessage(value)
    }

    const onSubmit = (event:any) => {
        console.log('event', event.key)
        if(event.key === 'Enter') {
            const data = {
                conv_id:currentDialog?.convid,
                message:message,
                partner:user?.id === sender ? userid : sender,
                id:user?.id,
            }
            console.log('data', data)
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