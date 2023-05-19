import './styles/index.scss';
import React, {useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {useAppDispatch, useAppSelector} from "shared/lib/redux/redux";
import {fetchCheckAuth} from "entities/RefreshTokenUser";
import {io} from 'socket.io-client';
import {useNavigate, useParams} from "react-router-dom";
import {dialogsActions} from "entities/Dialogs";
import useChat from "shared/lib/useChat/useChat";
import {userActions} from "entities/User";
// import { socket } from '../shared/lib/socket/socket';


const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {currentDialog} = useAppSelector(state => state.dialogs)
    // const {sendMessage, getDialogs} = useChat(currentDialog.convid, user, partnerId)

    const getDialogs = (user:any) => {
        const socket = io('http://localhost:8080', {
            query: {
                // отправляем идентификатор комнаты и имя пользователя на сервер
                roomId: currentDialog ?? 0,
                userName: user.fullname,
                userId: user.id,
                email:user.email
            }
        });

        // socket.on('connection:get', (isOnline) => {
        //     dispatch(userActions.setIsOnline(isOnline))
        // })
        socket.emit('users:connect', user)
        dispatch(userActions.setIsOnline(true))

        if(localStorage.getItem('currentDialog')) {
            const tmp = JSON.parse(localStorage.getItem('currentDialog'))
            dispatch(dialogsActions.setCurrentDialog(tmp))
            navigate(`/${tmp.id}`)
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
                    console.log('res',res)
                    getDialogs(res)
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
