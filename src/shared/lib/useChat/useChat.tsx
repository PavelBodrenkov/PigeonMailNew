import React, { useEffect, useMemo, useState} from 'react';
import {io} from "socket.io-client";
import {dialogsActions} from "entities/Dialogs";
import {useAppDispatch} from "shared/lib/redux/redux";

export default function useChat(roomId:any, user:any, partnerId:any) {
    console.log('roomId', roomId)
   const dispatch = useAppDispatch()

    const [users, setUsers] = useState([])
    // локальное состояние для списка сообщений
    const [messages, setMessages] = useState<{
        avatar: string | null
        date: string
        fullname: string
        id: number
        message: string
        readed: number
        sender: number
    }[]>([])

    // состояние для системного сообщения
    const [log, setLog] = useState(null)

    const socket = useMemo(() => {
        return io('http://localhost:8080', {
            query: {
                // отправляем идентификатор комнаты и имя пользователя на сервер
                roomId: roomId,
                userName: user.fullname,
                userId: user.id,
                partnerId:partnerId
            }
        })
    }, [partnerId, roomId, user])

    useEffect(() => {
        // сообщаем о подключении нового пользователя
        socket.emit('user:add', user)

        // запрашиваем сообщения из БД
        socket.emit('message:get')

        // обрабатываем получение системного сообщения
        socket.on('log', (log) => {
            setLog(log)
        })

        // обрабатываем получение обновленного списка пользователей
        socket.on('user_list:update', (users) => {
            setUsers(users)
        })

        // обрабатываем получение обновленного списка сообщений
        socket.on('message_list:update', (messages) => {
            setMessages(messages)
            socket.emit('dialogs:get')
        })
    }, [roomId])

    // метод для отправки сообщения
    const sendMessage = (message:any) => {
        socket.emit('message:add', message)
    }

    return { users, messages, log, sendMessage }
};