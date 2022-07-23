// Types
import { ButtonHTMLAttributes } from 'react';

// React
import { useFormState } from 'react-hook-form';


export type Props = ButtonHTMLAttributes<HTMLButtonElement>;


export const FormButton = (props: Props) => {
    const { isValid } = useFormState();

    return (
        <button {...props} type="submit" disabled={!isValid}  />
    );
};
