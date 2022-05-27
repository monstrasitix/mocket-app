// Types
import type { PropsWithChildren } from 'react';

// React
import { useState, useEffect, useContext, createContext } from 'react';


export type Props = PropsWithChildren<{
    online: Context['isOnline'],
}>;


export type Context = {
    isOnline: boolean;
    setOnline: (isOnline: boolean) => void;
};


export const OnlineContext = createContext<Context>({
    isOnline: false,
    setOnline: () => undefined,
});


export const useOnline = (): Context => (
    useContext(OnlineContext)
);


export const OnlineProvider = ({ children, online }: Props) => {
    const [isOnline, setOnline] = useState(online);

    const handleConnection = () => {
        setOnline(navigator.onLine);
    };

    useEffect(() => {
        addEventListener('online', handleConnection);
        addEventListener('offline', handleConnection);

        return () => {
            removeEventListener('online', handleConnection);
            removeEventListener('offline', handleConnection);
        };
    }, []);

    return (
        <OnlineContext.Provider value={{ isOnline, setOnline }}>
            {children}
        </OnlineContext.Provider>
    );
};
