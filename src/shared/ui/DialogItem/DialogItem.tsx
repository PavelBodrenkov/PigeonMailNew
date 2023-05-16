import React, {FC} from 'react';
import cls from "widgets/DialogList/ui/DialogList.module.scss";
import Read from "shared/assets/icons/Read/Read";
import {NoRead} from "shared/assets/icons/NoRead/NoRead";
import {itemDialogType} from "entities/Dialogs/model/types/dialogTypes";
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "shared/lib/redux/redux";
import {dialogsActions} from "entities/Dialogs";
import {classNames} from "shared/lib/classNames/classNames";

interface MessageItemProps {
    item: itemDialogType
}

export const DialogItem: FC<MessageItemProps> = (props) => {
    const {avatar, fullname, message, date, readed, convid, userid} = props.item

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {currentDialog} = useAppSelector(state => state.dialogs)

    const renderAvatar = (avatar: string | null, name: string) => {
        if (avatar === null) {
            return name.slice(0, 1).toUpperCase()
        }
        return 'A'
    }

    const handleClickDialog = (id: number) => {
        navigate(`/${id}`)
        dispatch(dialogsActions.setCurrentDialog(props.item))
        dispatch(dialogsActions.setPartnerId(userid))
        localStorage.setItem('currentDialog', JSON.stringify(props.item))
        localStorage.setItem('parentId', `${userid}`)
    }

    return (
        <div className={classNames(cls.container, {[cls.active]: convid === currentDialog.convid}, [])}
             onClick={() => handleClickDialog(convid)}>
            <div className={cls.avatar}>{renderAvatar(avatar, fullname)}</div>
            <div className={cls.content}>
                <div className={cls.content__name}>{fullname}</div>
                <div className={cls.content__message}>{message}</div>
            </div>
            <div className={cls.time_content}>
                <div className={cls.time_content__time}>{'11:00'}</div>
                {readed ? <Read height={20} width={15}/> : <NoRead height={15} width={12}/>}
            </div>
        </div>
    );
};