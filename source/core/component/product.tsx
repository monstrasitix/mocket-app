// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// Models
import { TProduct } from '@model/product';


export type Props = {
    product: TProduct
    [key: string]: unknown;
};


export const Product = ({ product, ...rest }: Props) => (
        <Card {...rest}>
            <CardMedia
                component="img"
                alt={product.title}
                src="/image/placeholder.png"
            />
            <CardContent>
                <Typography>{product.title}</Typography>
            </CardContent>
        </Card>
    );
