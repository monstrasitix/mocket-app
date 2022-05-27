// Models
import { Banner } from '@model/banner';


const banners: Array<Banner> = [
    { id: 1, src: '/image/placeholder.png', name: 'Some name' },
    { id: 2, src: '/image/placeholder.png', name: 'Some name' },
    { id: 3, src: '/image/placeholder.png', name: 'Some name' },
];


export const useBanners = (): Array<Banner> => (
    banners
);
