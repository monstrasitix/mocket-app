// Models
import { TProduct } from '@model/product';
import { range } from 'lodash';

const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet numquam voluptatem reprehenderit architecto nisi tempora eos dolore! Nulla temporibus, natus voluptates a qui odit pariatur magni, eius provident ad facere.';

const PRODUCTS: Array<TProduct> = range(1, 2).map(id => ({
    id,
    sku: id % 2 == 0 ? lorem : 'SKU',
    title: id % 2 == 0 ? lorem : 'Some title',
    price: 23.232323,
}));


export const useProducts = (): Array<TProduct> => PRODUCTS;
