// Types
import type { Path } from 'react-hook-form';
import type {
    ReactNode,
    SelectHTMLAttributes,
} from 'react';

// React
import { useFormContext } from 'react-hook-form';

// Components
import { FieldError } from '@component/field-error';


export type Props<T> = Omit<SelectHTMLAttributes<HTMLSelectElement>, (
    | 'name'
    | 'type'
)> & {
    name: Path<T>;
    label?: ReactNode;
};


export const Select = <T,>({
    name,
    ...rest
}: Props<T>) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <>
            <select
                id={name}
                className="input"
                {...rest}
                {...register(name)}
            />

            <FieldError errors={errors} name={name} />
        </>
    );
};
