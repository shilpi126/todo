
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useRoutes } from 'react-router-dom';
import { Link } from "react-router-dom";
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoItem';
import TodoItem from '../components/TodoItem';





const buttons = [
    <Link to="/login"  style={{textDecoration:"none", color:"whitesmoke"}}>LOGIN</Link>,
    <Link to="/logout" style={{textDecoration:"none", color:"whitesmoke"}}>LOGOUT</Link>,
    <Link to="/signup" style={{textDecoration:"none", color:"whitesmoke"}}>SIGN UP</Link>,
    
    <Link to="/add-task" style={{textDecoration:"none", color:"whitesmoke"}} >ADD TASK</Link>

]





const Header = () => {

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
    <>

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap
            
            
            sx={{
              mr: 38,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'whiteSmoke',
              textDecoration: 'none',
              flexGrow:10
            }}
          >
          TODO
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
              {buttons.map((btn) => (
                <MenuItem key={btn} onClick={handleCloseNavMenu} >
                    <Button variant='text' fullWidth textAlign="center"  sx={{backgroundColor:"gray"}}>{btn}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Typography
            variant="h5"
            noWrap
            
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
            TODO
          </Typography>
          
          <Box sx={{ flexGrow:1,  display: { xs: 'none', md: 'flex' } }}>
            { buttons.map((btn) => (
                <Button
                key={btn}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                {btn}
              </Button>
            ))}
          </Box>

       

         
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Header