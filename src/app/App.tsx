import './styles/index.scss';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import {NavBar} from "widgets/NavBar";
import {NavBarContent} from "widgets/NavBarContent";
import {store} from "app/providers/StoreProvider";

// import { injectStore } from "../shared/lib/axios/axios";

const rootStore = store()
// injectStore(rootStore)

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Provider store={rootStore}>
                <Suspense fallback="">
                    <div className="content-page">
                        <NavBar />
                        <NavBarContent />
                        <AppRouter />
                    </div>
                </Suspense>
            </Provider>
        </div>
    );
};

export default App;
