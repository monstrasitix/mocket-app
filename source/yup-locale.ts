// Yup
import { setLocale } from 'yup';

// Model
import { I18nKeys, I18nObject } from '@model/i18n';


export const simple = (key: I18nKeys): I18nObject => ({
    text: key,
});


export const complex = (key: I18nKeys) => (
    (params): I18nObject => ({ text: key, params })
);


{
    setLocale({
        mixed: {
            required: simple('required'),
        },
        string: {
            email: simple('string.email'),
            min: complex('string.min'),
            max: complex('string.max'),
        },
        number: {
            min: complex('number.min'),
            max: complex('number.max'),
        },
    });
}
