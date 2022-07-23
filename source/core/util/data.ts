export const isObject = (value: Maybe<object>): boolean => (
    typeof value == 'object'
);


export const isArray = (value: Maybe<[]>): boolean => (
    Array.isArray(value)
);
