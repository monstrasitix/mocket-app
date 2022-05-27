// Yup
import { setLocale } from 'yup';

// Model
import { I18nKeys, I18nObject } from '@model/i18n';



export const p = (text: I18nKeys) => (
    <T extends object>(params: T): I18nObject => ({ text, params })
);


{
    setLocale({
        mixed: {
            required: p('required'),
        },
        string: {
            email: p('string.email'),
            min: p('string.min'),
            max: p('string.max'),
        },
        number: {
            min: p('number.min'),
            max: p('number.max'),
        },
    });
}
