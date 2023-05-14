import React, {FC} from 'react';
import {IconProps} from "app/types/types";

const Chat:FC<IconProps> = ({ height, style, width, fill, stroke }) => {
    return (
        <svg viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="Communication / Chat_Conversation_Circle">
                    <path id="Vector"
                          d="M9.33814 15.9905C12.4946 15.8151 15 13.2003 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.1807 3.34094 12.2817 3.92989 13.21L3.50586 14.482L3.50518 14.4839C3.34278 14.9711 3.26154 15.2149 3.31938 15.3771C3.36979 15.5184 3.48169 15.6299 3.62305 15.6803C3.78472 15.7379 4.02675 15.6573 4.51069 15.4959L4.51758 15.4939L5.79004 15.0698C6.7183 15.6588 7.81935 15.9998 9.00006 15.9998C9.11352 15.9998 9.22624 15.9967 9.33814 15.9905ZM9.33814 15.9905C9.33822 15.9907 9.33806 15.9902 9.33814 15.9905ZM9.33814 15.9905C10.1591 18.3259 12.3841 20.0002 15.0001 20.0002C16.1808 20.0002 17.2817 19.6588 18.2099 19.0698L19.482 19.4939L19.4845 19.4944C19.9717 19.6567 20.2158 19.7381 20.378 19.6803C20.5194 19.6299 20.6299 19.5184 20.6803 19.3771C20.7382 19.2146 20.6572 18.9706 20.4943 18.4821L20.0703 17.21L20.2123 16.9746C20.7138 16.0979 20.9995 15.0823 20.9995 14C20.9995 10.6863 18.3137 8 15 8L14.7754 8.00414L14.6621 8.00967"
                          stroke={stroke || "#292D32"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill}></path>
                </g>
            </g>
        </svg>
    );
};

export default Chat;