import React, {useState} from 'react';
import cls from './SearchChart.module.scss';
import Search from "shared/assets/icons/Search/Search";
import {classNames} from "shared/lib/classNames/classNames";

export const SearchChart = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={cls.SearchChart}>
            <div className={classNames(cls.wrapper_input, {[cls.focus_input]: isFocused}, [])}>
                <Search width={20} height={20} stroke={isFocused ? '#722ed1' : '#434343'}/>
                <input placeholder={'Поиск'} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
            </div>
        </div>
    );
};
