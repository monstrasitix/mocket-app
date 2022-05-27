// React
import { useRef } from 'react';
import ReactSwipe from 'react-swipe';

// Components
import { Image } from '@component/image';


// Hooks
import { useBanners } from '@hook/repo/banners';


export const carouselOptoins: SwipeOptions = {
    auto: 3000,
    continuous: true,
};


export const Banners = () => {
    const carousel = useRef(null);
    const banners = useBanners();

    return (
        <ReactSwipe ref={carousel} swipeOptions={carouselOptoins}>
            {banners.map(banner => (
                <div key={banner.id} style={{ height: 300 }}>
                    <Image
                        className="image"
                        alt={banner.name}
                        src={banner.src}
                    />
                </div>
            ))}
        </ReactSwipe>
    );
};
