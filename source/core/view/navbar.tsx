// MUI
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Navbar = () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton color="inherit" edge="start">
                <MenuIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton color="inherit"><QrCodeIcon /></IconButton>
            <IconButton color="inherit"><SearchIcon /></IconButton>
            <IconButton color="inherit"><ShoppingCartIcon /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
);
