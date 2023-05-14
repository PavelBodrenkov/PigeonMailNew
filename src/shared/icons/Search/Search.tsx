import React, {FC} from 'react';
import {IconProps} from "app/types/types";

const Search:FC<IconProps> = ({ height, style, width, fill, stroke }) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="Interface / Search_Magnifying_Glass">
                    <path id="Vector"
                          d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                          stroke={stroke || '#000000'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill={fill}></path>
                </g>
            </g>
        </svg>
    );
};

export default Search;