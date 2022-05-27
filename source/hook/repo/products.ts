// Models
import { TProduct } from '@model/product';
import { range } from 'lodash';


const PRODUCTS: Array<TProduct> = range(1, 11).map(id => ({
    id,
    sku: 'SKU-CODE-HERE',
    title: 'Some bigass random title',
    price: 23.232323,
}));


export const useProducts = (): Array<TProduct> => PRODUCTS;
