// Types
import type { Merchant } from './merchant';


declare global {
    type Maybe<T> = T | unknown;
    type Nullable<T> = T | null;
    type Undefined<T> = T | undefined;


    const VERSION: string;
    const MERCHANT: Merchant;
}
