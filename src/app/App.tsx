import './styles/index.scss';
import React, {useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {useAppDispatch, useAppSelector} from "shared/lib/redux/redux";
import {fetchCheckAuth} from "entities/RefreshTokenUser";
import {io} from 'socket.io-client';
import {useParams} from "react-router-dom";
import {dialogsActions} from "entities/Dialogs";
// import { socket } from '../shared/lib/socket/socket';


const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch()
    const {currentDialog} = useAppSelector(state => state.dialogs)

    const getDialogs = (userId: number, userName: string) => {
        const socket = io('http://localhost:8080', {
            query: {
                // отправляем идентификатор комнаты и имя пользователя на сервер
                roomId: currentDialog ?? 0,
                userName: userName,
                userId: userId
            }
        });

        socket.emit('dialogs:get')
        // обрабатываем получение обновленного списка сообщений
        socket.on('dialogs_list:get', (dialogs) => {
            dispatch(dialogsActions.setDialogs(dialogs))
        })

        if(localStorage.getItem('currentDialog')) {
            const tmp = JSON.parse(localStorage.getItem('currentDialog'))
            dispatch(dialogsActions.setCurrentDialog(tmp))
        }
        if(localStorage.getItem('parentId')) {
            dispatch(dialogsActions.setPartnerId(Number(localStorage.getItem('parentId'))))
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(fetchCheckAuth())
                .unwrap()
                .then((res) => {
                    getDialogs(res.id, res.fullname)
                })
        }
    }, [])

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter/>
        </div>
    );
};

export default App;
