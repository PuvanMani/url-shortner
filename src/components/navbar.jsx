import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.jpg'

export default function ButtonAppBar() {
    const [open, setOpen] = useState(false)

    const handleMenuOpen = () => {
        setOpen(!open);
    };

    let normal = {
        textDecoration: "none ",
        color: "#000",
        marginRight: "20px",
    }
    let login = {
        textDecoration: "none",
        color: "#FFF",
        backgroundColor: "#e73c7e",
        padding: "8px 15px",
        borderRadius: "8px",
        ":hover": { backgroundColor: "#e73c7e" },
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        cursor: "pointer"
    }
    let signup = {
        textDecoration: "none",
        color: "#000",
        backgroundColor: "#FFF",
        padding: "8px 15px",
        borderRadius: "8px",
        marginRight: "20px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        ":hover": { backgroundColor: "#FFF" },
        cursor: "pointer"
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ backgroundColor: "#FFF", color: "#000" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1, display: { xs: "block", sm: "none" } }}
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                        <Menu
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={open}
                            onClose={handleMenuOpen}
                        >
                            <MenuItem><Link style={normal} to='/'>Home</Link></MenuItem>
                            <MenuItem><Link style={normal} to='/about'>About</Link></MenuItem>
                            <MenuItem><Link style={normal} to='/contact'>Contact</Link></MenuItem>
                            <MenuItem><Link style={signup} to='/signup'>Sign Up</Link></MenuItem>
                            <MenuItem><Link style={login} to='/login'>Log In</Link></MenuItem>
                        </Menu>
                    </IconButton>
                    <Box
                        component="img"
                        sx={{
                            height: 40,
                            width: 40,
                            maxHeight: "100%",
                            maxWidth: "100%",

                        }}
                        alt="The house from the offer."
                        src={logo}

                    />
                    <Typography variant="h6" component="div" sx={{ pl: "10px", flexGrow: 1, fontWeight: "700" }}>
                        PMlinks
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
                        <Link style={normal} to='/'>Home</Link>
                        <Link style={normal} to='/about'>About</Link>
                        <Link style={normal} to='/contact'>Contact</Link>
                        <Link style={signup} to='/signup'>Sign Up</Link>
                        <Link style={login} to='/login'>Log In</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}