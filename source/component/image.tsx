// Types
import type { ImgHTMLAttributes } from 'react';

// React
import { useState } from 'react';

// Hooks
import { useImages } from '@hook/images';


export type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, (
    | 'src'
    | 'alt'
)> & {
    src: string;
    alt: string;
};


export const Image = ({ src, ...rest }: Props) => {
    const { fallback } = useImages();
    const [source, setSource] = useState(src);

    const handleError = () => {
        setSource(fallback);
    };

    return (
        <img
            {...rest}
            src={source}
            onError={handleError}
        />
    );
};
