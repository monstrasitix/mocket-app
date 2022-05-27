// Types
import type { AnyObjectSchema } from 'yup';
import type { PropsWithChildren, FormHTMLAttributes } from 'react';
import type { SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

// React
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';


export type Props<T> = PropsWithChildren<
    Omit<FormHTMLAttributes<HTMLFormElement>, (
        | 'onSubmit'
        | 'onError'
    )> & {
        schema?: AnyObjectSchema,
        onSubmit?: SubmitHandler<T>;
        onError?: SubmitErrorHandler<T>;
    }
>;


export type FormProps<T> = Partial<Props<T>>;


export const Form = <T,>({
    schema,
    onError = () => undefined,
    onSubmit = () => undefined,
    ...rest
}: Props<T>) => {

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: schema?.getDefault(),
        resolver: schema && yupResolver(schema),
    });

    return (
        <FormProvider {...methods}>
            <form
                {...rest}
                noValidate
                className="form"
                autoComplete="off"
                autoCapitalize="off"
                onSubmit={methods.handleSubmit(onSubmit, onError)}
            />
        </FormProvider>
    );
};
