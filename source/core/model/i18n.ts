export type I18nButtons = (
    | 'login'
);


export type I18nTitles = (
    | 'featuredProducts'
    | 'categories'
    | 'newsletters'
);


export type I18nValidation = (
    | 'required'

    | 'string.email'
    | 'string.min'
    | 'string.max'

    | 'number.min'
    | 'number.max'
);


export type I18nKeys = (
    | I18nValidation
    | `title.${I18nTitles}`
    | `button.${I18nButtons}`
);


export type I18nObject = {
    text: I18nKeys;
    params?: object;
};


export type I18n = Record<I18nKeys, string>;


export const english: I18n = {
    'required': 'Required',
    'button.login': 'Login',
    'string.email': 'Must be email',
    'string.min': 'Minimum length is {{min}}',
    'string.max': 'Maximum length is {{max}}',
    'number.min': 'Minimum number {{min}}',
    'number.max': 'Maximum number {{max}}',
    'title.featuredProducts': 'Featured Products',
    'title.categories': 'Categories',
    'title.newsletters': 'Newsletters',
};
