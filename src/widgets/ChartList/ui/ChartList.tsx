import React from 'react';
import cls from './ChartList.module.scss';
import {MessageItem} from "shared/ui/MessageItem/MessageItem";

const testArr = [
    {
        avatar: 'P',
        name: 'Pavel',
        message: 'message',
        time: '20:15',
        read: true
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'D',
        name: 'Dima',
        message: 'message',
        time: '20:35',
        read: true
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },
    {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    }, {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    }, {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    }, {
        avatar: 'A',
        name: 'Alina',
        message: 'message',
        time: '20:25',
        read: false
    },




]

export const ChartList = () => {
    return (
        <div className={cls.ChartList}>
            {testArr.map((item, index) => {
                const {avatar, name, message, time, read} = item
                return (
                    <MessageItem
                        key={index}
                        avatar={avatar}
                        name={name}
                        message={message}
                        time={time}
                        read={read}
                    />
                )
            })}
        </div>
    );
};