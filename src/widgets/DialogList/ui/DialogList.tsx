import React from 'react';
import cls from './DialogList.module.scss';
import {DialogItem} from "shared/ui/DialogItem/DialogItem";
import {useAppSelector} from "shared/lib/redux/redux";
import useDialogs from "shared/lib/useDialogs/useDialogs";

export const DialogList = () => {
const {user} = useAppSelector(state => state.user)
    // const {dialogs} = useAppSelector(state => state.dialogs)
    const {dialogs} = useDialogs(user)
    return (
        <div className={cls.ChartList}>
            {dialogs.map((item, index) => {
                return (
                    <DialogItem
                        item={item}
                        key={index}
                    />
                )
            })}
        </div>
    );
};