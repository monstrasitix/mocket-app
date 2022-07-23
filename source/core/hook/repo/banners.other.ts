// Models
import { Banner } from '@model/banner';


const banners: Array<Banner> = [
    { id: 1, src: '/image/placeholder.png', name: 'Other name' },
];


export const useBanners = (): Array<Banner> => (
    banners
);
