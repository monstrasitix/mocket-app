// Types
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import type { LinkBaseProps as MUIProps } from '@mui/material/Link';

// React
import { Link as RouterLink } from 'react-router-dom';

// MUI
import MUILink from '@mui/material/Link';


export type Props = MUIProps & {
    to: RouterLinkProps['to'];
};


export const Link = (props: Props) => (
    <MUILink
        {...props}
        component={RouterLink}
    />
);
