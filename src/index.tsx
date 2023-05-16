import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'shared/config/i18n/i18n';
import {Provider} from "react-redux";
import {store} from "app/providers/StoreProvider";
const rootStore = store()

render(
    <BrowserRouter>
        <ErrorBoundary>
            <Provider store={rootStore}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </Provider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);