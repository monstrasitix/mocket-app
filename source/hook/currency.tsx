// React
import { useMemo } from 'react';


export const useCurrency = () => (
    useMemo(() => (
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
        })
    ), []).format
);
