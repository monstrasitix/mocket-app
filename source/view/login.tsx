// Types
import type { SubmitHandler } from 'react-hook-form';
import type { SchemaOf } from 'yup';

// React
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// Models
import { I18nKeys } from '@model/i18n';

// Utils
import { isEmail, isPassword } from '@util/validation';
import { object } from 'yup';

// Components
import { Form } from '@component/form';
import { FormButton } from '@component/form-button';
import { Email, Password } from '@component/input';

// Hooks
import { useTranslation } from '@hook/translation';


export type F = {
    email: string;
    password: string;
};


export const Login = () => {
    const t = useTranslation<I18nKeys>();
    const navigate = useNavigate();

    const schema: SchemaOf<F> = useMemo(() => object({
        email: isEmail(''),
        password: isPassword(''),
    }), []);


    const handleSubmit: SubmitHandler<F> = () => {
        navigate('/');
    };


    return (
        <div className="container -modal">
            <div className="box -centered -viewport-height">
                <Form schema={schema} onSubmit={handleSubmit}>
                    <div className="flow -vertical">
                        <div>
                            <Email<F> className="input" name="email" placeholder="Email address" />
                        </div>

                        <div>
                            <Password<F> className="input" name="password" placeholder="Password" />
                        </div>

                        <FormButton className="button -primary">
                            {t('button.login')}
                        </FormButton>
                    </div>
                </Form>
            </div>
        </div>
    );
};
