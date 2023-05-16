export interface itemDialogType {
    avatar: string | null
    convid: number
    date: string
    fullname: string
    is_online: number
    last_message_id: number
    message: string
    readed: number
    sender: number
    unread: number
    userid: number
}

export interface initialStateType {
    dialogs:itemDialogType[],
    currentDialog:itemDialogType,
    partnerId:number
}