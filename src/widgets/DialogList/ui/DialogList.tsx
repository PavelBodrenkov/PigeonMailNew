import React from 'react';
import cls from './DialogList.module.scss';
import {DialogItem} from "shared/ui/DialogItem/DialogItem";
import {useAppSelector} from "shared/lib/redux/redux";


const testArr = [
    {
        id: 1,
        avatar: 'P',
        name: 'Pavel',
        message: 'message',
        time: '20:15',
        read: true
    },
    {
        id: 2,
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        id: 3,
        avatar: 'D',
        name: 'Dima',
        message: 'message',
        time: '20:35',
        read: true
    }
]

export const DialogList = () => {

    const {dialogs} = useAppSelector(state => state.dialogs)

    console.log('dialogs', dialogs)

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