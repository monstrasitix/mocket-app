// Types
import type { SubmitHandler } from 'react-hook-form';
import type { SchemaOf } from 'yup';

// React
import { useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Models
import { I18nKeys } from '@model/i18n';

// Utils
import { object } from 'yup';
import { isEmail, isPassword } from '@util/validation';

// Components
import { Form } from '@component/form';
import { Image } from '@component/image';
import { Email, Password } from '@component/input';

// Hooks
import { useTranslation } from '@hook/translation';


export type F = {
    email: string;
    password: string;
};

/*
[] Powered BY Aphix Software
[] Logo
[] Banner
[] Forgot Password?
*/

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


    const imageSize = 100;

    return (
        <div className="box -viewport-height" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="box -centered" style={{ height: '40%', backgroundColor: 'silver' }}>
                <div style={{ textAlign: 'center' }}>
                    <Image
                        src=""
                        alt=""
                        className="image"
                        style={{ width: imageSize, height: imageSize }}
                    />
                    <p>
                        <strong>{MERCHANT.branding.appName}</strong>
                    </p>
                    <Link to="/login">{MERCHANT.company.website}</Link>
                </div>
            </div>

            <div className="container -modal" style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                <Form schema={schema} onSubmit={handleSubmit}>
                    <div className="flow -vertical">
                        <div>
                            <Email<F> className="input" name="email" placeholder="Email address" />
                        </div>

                        <div>
                            <Password<F> className="input" name="password" placeholder="Password" />
                        </div>

                        <button type="submit" className="button -primary">
                            {t('button.login')}
                        </button>

                        <Link className="button -secondary" to="/login">
                            Forgot Password
                        </Link>
                    </div>
                </Form>

                <p>Powered by aphix software</p>
            </div>
        </div>

    );
};
