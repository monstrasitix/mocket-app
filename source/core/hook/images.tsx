// Type
import type { PropsWithChildren } from 'react';

// React
import { createContext, useContext } from 'react';


export type Props = PropsWithChildren<Context>;


export type Context = {
    fallback: string;
};


export const ImagesContext = createContext<Context>({
    fallback: '',
});


export const useImages = (): Context => (
    useContext(ImagesContext)
);


export const ImagesProvider = ({ fallback, children }: Props) => (
    <ImagesContext.Provider value={{ fallback }}>
        {children}
    </ImagesContext.Provider>
);
