import Chat from "shared/icons/Chat/Chat";
import Settings from "shared/icons/Settings/Settings";
import Help from "shared/icons/Help/Help";
import Profile from "shared/icons/Profile/Profile";

export enum tabKey {
    CHAT = 'chat',
    SETTINGS = 'settings',
    HELP = 'help',
    PROFILE = 'profile'
}

export const items = [
    {
        key: tabKey.CHAT,
        name: 'Чат',
        Icon: Chat,
},
{
    key: tabKey.SETTINGS,
        name: 'Настройки',
    Icon: Settings,
}
]

export const items2 = [
    {
        key: tabKey.HELP,
        name: 'Помощь',
        Icon: Help,
},
{
    key: tabKey.PROFILE,
        name: 'Профиль',
    Icon: Profile,
}
]