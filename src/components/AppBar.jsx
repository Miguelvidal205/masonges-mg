import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../media/icons/masonsmg.ico'

const pages =
  ['INICIO', 'QUINES SOMOS', 'NUESTROS PRINCIPIOS', 'FOTOS', 'LINKS', 'MFFM', 'CONTACTO'];


export default function AppBarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const itemsList = [
  {
    text: 'INICIO',
    href: '/homepage'
  },
  {
    text: 'LINKS',
    href: '/links'
  },
  {
    text: 'FOTOS',
    href: '/photos'
  }
];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{ background: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={logo} /> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {itemsList.map((item) => {
                const { text, onClick } = item;
                <MenuItem 
                  key={text}
                  onClick={onClick}>
                  <Typography textAlign="center">{text}</Typography>
                </MenuItem>
              }
              )} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {itemsList.map((item, index) => {
              return (
              <Button
                key={index}
                href={item.href}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.text}
              </Button>
              )}
              )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
