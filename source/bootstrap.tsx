// React
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';

// Wrappers
import { Provider } from '@wrapper/provider';

// Views
import { Login } from '@view/login';
import { Landing } from '@view/landing';


/**
 * @summary Does something
 * @example
 * @returns {JSX.Element}
 */
export const App = () => (
    <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
    </Routes>
);


/**
 * @summary Root render
 * @example
 * ```TypeScript
 * bootstrap(document.getElementById('root'));
 * ```
 * @param {HTMLElement} target - Render to it
 */
export const bootstrap = (target: HTMLElement) => {
    createRoot(target).render(
        <Provider>
            <App />
        </Provider>
    );
};
