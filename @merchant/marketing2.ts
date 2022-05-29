// Types
import type { Merchant } from '@type/merchant';


const merchant: Merchant = {
    key: 'marketing2',
    domain: 'com.aphixsoftware.pocketshopapp',
    company: {
        title: 'Pocketshop by Aphix',
        website: 'http://marketing2.webshop.aphixsoftware.com',
        telephone: '(041) 213 7222',
        email: 'info@pocketshop.ie',
        address: [
            'The Mill',
            'Greenhills Business Park',
            'Newtown Link Road',
            'Stagreenan',
            'Drogheda',
            'Co. Louth',
            'A92 CD3D',
        ],
    },
    branding: {
        appName: 'Pocketshop by Aphix',
        assets: './css-file.scss',
        theme: './css-file.scss',
    },
};


export default merchant;
