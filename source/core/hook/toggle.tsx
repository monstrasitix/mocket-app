// React
import { useState } from 'react';


export const useToggle = (open: boolean) => {
    const [isOpen, setOpen] = useState(open);

    return {
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(open => !open),
    };
};
