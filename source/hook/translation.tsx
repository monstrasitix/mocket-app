// Types
import { PropsWithChildren } from 'react';

// React
import { createContext, useContext, useState } from 'react';


export type Context<T extends string> = {
    text: Record<T, string>;
    setText: (text: Context<T>['text']) => void;
};


export type TranslationReturn<T> = (key: T) => string;


export type Props<T extends string> = PropsWithChildren<{
    language: Context<T>['text']
}>;


export const TranslationContext = createContext<Context<string>>({
    text: {},
    setText: () => undefined,
});


export const useTranslation = <T extends string>(): TranslationReturn<T> => {
    const context = useContext(TranslationContext);

    return (key: T) => (
        context.text[key] || key
    );
};


export const TranslationProvider = <T extends string>({
    children,
    language,
}: Props<T>) => {
    const [text, setText] = useState(language);

    return (
        <TranslationContext.Provider value={{ text, setText }} >
            {children}
        </TranslationContext.Provider>
    );
};
