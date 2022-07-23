// Types
import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';

// App
import theme from '@app/theme';

// React
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Hooks
import { OnlineProvider } from '@hook/online';
import { ImagesProvider } from '@hook/images';
import { TranslationProvider } from '@hook/translation';

// Models
import { english } from '@model/i18n';


export type Props = PropsWithChildren<object>;


export const Provider = ({ children }: Props) => (
    <BrowserRouter>
        <TranslationProvider language={english}>
            <OnlineProvider online={navigator.onLine}>
                <ImagesProvider fallback="/image/placeholder.png">
                    <ThemeProvider theme={theme}>
                        <StrictMode children={children} />
                    </ThemeProvider>
                </ImagesProvider>
            </OnlineProvider>
        </TranslationProvider>
    </BrowserRouter>
);
