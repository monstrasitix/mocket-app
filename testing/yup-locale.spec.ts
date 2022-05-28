// Types
import type { I18nKeys } from '@model/i18n';

// SUT
import { p } from '@app/yup-locale';


describe('Yup-Locale: P', () => {
    it('should return object', () => {
        // Setup
        const params = {};
        const text: I18nKeys = 'button.login';

        // Execution
        const sut = p(text)(params);

        // Assertion
        expect(sut.text).toBe(text);
        expect(sut.params).toBe(params);
    });
});
