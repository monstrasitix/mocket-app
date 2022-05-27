// Components
import { Product } from '@component/product';

// Hooks
import { useProducts } from '@hook/repo/products';


export const FeaturedProducts = () => {
    const products = useProducts();

    return (
        <section>
            <div className="flow -horizontal hscroll">
                {products.map(product => (
                    <div key={product.id}>
                        <Product product={product} style={{ width: '300px' }} />
                    </div>
                ))}
            </div>
        </section>
    );
};
