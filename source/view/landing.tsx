// Lodash
import { range } from 'lodash';

// Hooks
import { useTranslation } from '@hook/translation';

// Models
import { I18nKeys } from '@model/i18n';

// Components
import { Image } from '@component/image';

// Views
import { Navbar } from '@view/navbar';
import { Banners } from '@view/banners';
import { FeaturedProducts } from '@view/featured-products';


export const Landing = () => {
    const t = useTranslation<I18nKeys>();

    return (
        <div>
            <Navbar />
            <Banners />

            <div className="container -page">
                <div className="flow -vertical" style={{ margin: '1rem 0' }}>
                    <section>
                        <h3>{t('title.featuredProducts')}</h3>

                        <FeaturedProducts />
                    </section>

                    <section>
                        <h3>{t('title.categories')}</h3>

                        <div className="grid -two">
                            {range(0, 4).map(id => (
                                <div key={id} className="grid-item">
                                    <Image className="image" alt="Placeholder" src="/image/placeholder.png" />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3>{t('title.newsletters')}</h3>

                        <div className="grid">
                            {range(0, 2).map(id => (
                                <div key={id} className="grid-item">
                                    <Image className="image" alt="Placeholder" src="/image/placeholder.png" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
