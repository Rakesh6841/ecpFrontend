import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize: 32,
              letterSpacing: '.3rem',
              color: '#DD793E',
              textDecoration: 'none',
            }}
          >
            ECP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', pr: 10, pl: 10 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'flex' }}
              >
                <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Button variant="contained" sx={{ borderRadius: "20px", background: "#DD793E", margin: 1 }}>Login</Button>
          <Button variant="contained" sx={{ borderRadius: "20px", background: "#DD793E" }}>SignUp</Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
