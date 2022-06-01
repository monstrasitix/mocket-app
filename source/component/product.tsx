// Components
import { Icon } from '@component/icon';
import { Image } from '@component/image';

// Models
import { TProduct } from '@model/product';

// Hooks
import { useCurrency } from '@hook/currency';



export type Props = {
    product: TProduct
    [key: string]: unknown;
};


export const Product = ({ product, ...rest }: Props) => {
    const formatCurrency = useCurrency();

    return (
        <div className="card" {...rest}>
            <Image
                src="/images/placeholder.png"
                className="card-image"
                alt={product.title}
            />
            <div className="card-icon">
                <button className="button -secondary">
                    <Icon name="heart" />
                </button>
            </div>
            <div className="card-content">
                <p className="prod-content heading">{product.title}</p>

                <div className="heading prod-content" style={{ fontSize: '0.8rem' }}>{product.sku}</div>

                <div><span className="price">{formatCurrency(product.price)}</span> ex VAT</div>
            </div>
            <div className="flow -vertical">
                <button className="button -primary">
                    <Icon name="plus" />
                    <span style={{ paddingLeft: '0.5em' }}>Add</span>
                </button>
            </div>
        </div>
    );
};
