import {useEffect, useMemo, useState} from "react";
import {io} from "socket.io-client";
import {dialogsActions} from "entities/Dialogs";
import {useAppDispatch} from "shared/lib/redux/redux";

export default function useDialogs(user:any) {

    const dispatch = useAppDispatch()

    const [dialogs, setDialogs] = useState([])

    const socket = useMemo(() => {
        return io('http://localhost:8080', {
            query: {
                // отправляем идентификатор комнаты и имя пользователя на сервер
                userId: user?.id,
            }
        })
    }, [user])

    useEffect(() => {
        socket.emit('dialogs:get')

        socket.on('dialogs_list:get', (dialogs) => {
            setDialogs(dialogs)
            // dispatch(dialogsActions.setDialogs(dialogs))
        })
    }, [user])

    const getDialogs = () => {
        // socket.emit('dialogs:get')
        // обрабатываем получение обновленного списка сообщений
        // socket.on('dialogs_list:get', (dialogs) => {
        //     setDialogs(dialogs)
        //     // dispatch(dialogsActions.setDialogs(dialogs))
        // })
    }
    console.log('dialogs', dialogs)

    return {getDialogs, dialogs }
}