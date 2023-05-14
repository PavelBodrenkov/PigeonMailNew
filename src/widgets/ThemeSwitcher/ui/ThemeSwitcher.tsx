import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import SwitchOn from "shared/assets/icons/SwitchOn/SwitchOn";
import SwitchOff from "shared/assets/icons/SwitchOff/SwitchOff";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className } :ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <SwitchOn width={30} height={30}/> : <SwitchOff width={30} height={30}/>}
        </Button>
    );
};
