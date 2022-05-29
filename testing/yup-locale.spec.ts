// Types
import type { I18nKeys } from '@model/i18n';

// SUT
import { simple, complex } from '@app/yup-locale';


describe('Yup-Locale', () => {
    describe('simple', () => {
        it('should return translation key in object', () => {
            // Setup
            const key: I18nKeys = 'button.login';

            // Execution
            const result = simple(key);

            // Assertion
            expect(result).toEqual({
                text: key,
            });
        });
    });

    describe('complex', () => {
        it('should return translation key with params', () => {
            // Setup
            const key: I18nKeys = 'button.login';
            const params: object = {
                min: 8,
            };

            // Execution
            const result = complex(key)(params);

            // Assertion
            expect(result).toEqual({
                text: key,
                params,
            });
        });
    });
});
