// Yup
import { setLocale } from 'yup';

// Model
import { I18nKeys, I18nObject } from '@model/i18n';


/**
 * Utility which accepts type match translation key. This allows to
 * return a translation message with associated params.
 * @param {I18nKeys} text - Translation key
 * @example ```
 * const trans = {
 *      'required': 'Required',
 *      'min.string': 'Minimum string length is {{min}}',
 *      'max.string': 'Maximum string length is {{min}}',
 * };
 *
 * const { text, params } = p('min.string')({
 *      min: 8,
 * });
 *
 * _.template(trans[text])(params) // 'Minimum string length is 8'
 * ```
 * @returns {(T) => I18nObject} Param eturn
 */
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
