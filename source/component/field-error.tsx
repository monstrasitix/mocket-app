// Types
import type { Path } from 'react-hook-form';

// React
import { get, template } from 'lodash';

// Hooks
import { useTranslation } from '@hook/translation';


export type Props<T> = {
    name: Path<T>;
    errors: Record<PropertyKey, {
        message: string | object;
    }>;
};



export const parseMessage = (trans, { message }) => {
    if (typeof message == 'object') {
        return template(trans(message.text))(message.params);
    }

    return trans(message);
};


export const FieldError = <T,>({ name, errors }: Props<T>) => {
    const t = useTranslation();

    if (name in errors) {
        return (
            <span className="error">
                {parseMessage(t, get(errors, name, { message: '' }))}
            </span>
        );
    }

    return null;
};
