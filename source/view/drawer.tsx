// React
import cn from 'classnames';
import { useState } from 'react';


export type Props = {
    open: boolean;
};

export const Drawer = ({ open }: Props) => {
    const [isOpen, setOpen] = useState(open);

    const handleClick = () => {
        setOpen(isOpen => !isOpen);
    };

    return (
        <div className={cn('drawer', { '-open': isOpen })}>
            <h3>Some drawer content</h3>

            <button onClick={handleClick} className="button -primary">
                Toggle
            </button>
        </div>
    );
};
