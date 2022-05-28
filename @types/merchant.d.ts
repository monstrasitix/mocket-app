export type Merchant = {
    name: string;
    phone: string;
};


declare global {
    const MERCHANT: Merchant;
}
