// Yup
import { string } from 'yup';


export const isEmail = (value: string) => (
    string().email().required().default(value)
);


export const isPassword = (value: string) => (
    string().min(8).default(value)
);
