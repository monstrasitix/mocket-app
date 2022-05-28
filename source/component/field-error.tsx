// Types
import type { Path } from 'react-hook-form';
import type { TranslationReturn } from '@hook/translation';

// Lodash
import { get, template } from 'lodash';

// Hooks
import { useTranslation } from '@hook/translation';

// Models
import { I18nObject } from '@model/i18n';


export type Props<T> = {
    name: Path<T>;
    errors: Record<PropertyKey, {
        message: I18nObject;
    }>;
};


export const parseMessage = (
    trans: TranslationReturn<string>,
    { text, params }: I18nObject,
) => {
    const translated = trans(text);

    return params
        ? template(translated)(params)
        : translated;
};


export const FieldError = <T,>({ name, errors }: Props<T>) => {
    const t = useTranslation();

    if (name in errors) {
        return (
            <span className="error">
                {parseMessage(t, get(errors, name).message)}
            </span>
        );
    }

    return null;
};
