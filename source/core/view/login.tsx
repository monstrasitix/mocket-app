// Types
import type { SubmitHandler } from 'react-hook-form';
import type { SchemaOf } from 'yup';

// React
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Models
import { I18nKeys } from '@model/i18n';

// Utils
import { object } from 'yup';
import { isEmail, isPassword } from '@util/validation';

// Components
import { Form } from '@component/form';
import { Email, Password } from '@component/input';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


// Hooks
import { useTranslation } from '@hook/translation';


export type F = {
    email: string;
    password: string;
};


export const Login = () => {
    const navigate = useNavigate();
    const t = useTranslation<I18nKeys>();

    const schema: SchemaOf<F> = useMemo(() => object({
        email: isEmail(''),
        password: isPassword(''),
    }), []);


    const handleSubmit: SubmitHandler<F> = () => {
        navigate('/');
    };


    return (
        <Box>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Email<F> className="input" name="email" placeholder="Email address" />
                <Password<F> className="input" name="password" placeholder="Password" />

                <Button type="submit" variant="contained">
                    {t('button.login')}
                </Button>
            </Form>
        </Box>
    );
};
