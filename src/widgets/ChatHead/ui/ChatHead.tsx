import React from 'react';
import cls from './ChatHead.module.scss';

export const ChatHead = () => {
    return (
        <div className={cls.ChatHead}>
            <div className={cls.transition}>
                <div className={cls.wrapper}>
                    <div className={cls.content}>
                        <div>Pavel</div>
                        <div>online</div>
                    </div>
                </div>
            </div>
        </div>
    );
};