import React, {FC} from 'react';
import {IconProps} from "app/types/types";

const SwitchOn:FC<IconProps> = ({ height, style, width, fill }) => {
    return (
        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} style={style}
            //@ts-ignore
             xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><title>/svg/ic-switch-on</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="ic-switch-on" fill-rule="nonzero" fill="#4A4A4A">
                        <path
                            d="M3,12 C3,14.2046438 4.78852545,16 6.9947834,16 L17.0052166,16 C19.2082844,16 21,14.209139 21,12 C21,9.79535615 19.2114745,8 17.0052166,8 L6.9947834,8 C4.79171562,8 3,9.790861 3,12 Z M1,12 C1,8.68773136 3.68570682,6 6.9947834,6 L17.0052166,6 C20.3154275,6 23,8.69016475 23,12 C23,15.3122686 20.3142932,18 17.0052166,18 L6.9947834,18 C3.68457248,18 1,15.3098352 1,12 Z M17,15 C15.3431458,15 14,13.6568542 14,12 C14,10.3431458 15.3431458,9 17,9 C18.6568542,9 20,10.3431458 20,12 C20,13.6568542 18.6568542,15 17,15 Z"
                            id="Rectangle-75" fill={fill}></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default SwitchOn;