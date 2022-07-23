// Components
import { Icon } from '@component/icon';


export const Navbar = () => (
    <div className="navbar">
        <div>
            <button className="button -primary"><Icon name="bars" /></button>
        </div>

        <div>
            <button className="button -primary"><Icon name="barcode" /></button>
            <button className="button -primary"><Icon name="search" /></button>
            <button className="button -primary"><Icon name="shopping-cart" /></button>
        </div>
    </div>
);
