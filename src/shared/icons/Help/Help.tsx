import React, {FC} from 'react';
import {IconProps} from "app/types/types";

const Help:FC<IconProps> = ({ height, style, width, fill, stroke}) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke={stroke || "#292D32"} stroke-width="2"></path>
                <path
                    d="M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13"
                    stroke={stroke || "#292D32"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 16H12.01" stroke={stroke || "#292D32"} stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" fill={fill}></path>
            </g>
        </svg>
    );
};

export default Help;