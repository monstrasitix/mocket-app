// Types
import type { Path } from 'react-hook-form';
import type {
    InputHTMLAttributes,
    HTMLInputTypeAttribute,
} from 'react';

// React
import { useFormContext } from 'react-hook-form';

// Components
import { FieldError } from '@component/field-error';


export type Props<T> = Omit<InputHTMLAttributes<HTMLInputElement>, (
    | 'name'
    | 'type'
)> & {
    name: Path<T>;
    type?: HTMLInputTypeAttribute;
};


export const Input = <T,>({
    name,
    type = 'text',
    ...rest
}: Props<T>) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
            <input {...rest} {...register(name)} id={name} type={type} />
            <FieldError errors={errors} name={name} />
        </>
    );
};


export const Email = <T,>(props: Omit<Props<T>, 'type'>) => (
    <Input<T> {...props} type="email" />
);


export const Password = <T,>(props: Omit<Props<T>, 'type'>) => (
    <Input<T> {...props} type="password" />
);
