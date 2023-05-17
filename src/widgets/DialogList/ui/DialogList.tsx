import React from 'react';
import cls from './DialogList.module.scss';
import {DialogItem} from "shared/ui/DialogItem/DialogItem";
import {useAppSelector} from "shared/lib/redux/redux";

export const DialogList = () => {

    const {dialogs} = useAppSelector(state => state.dialogs)

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