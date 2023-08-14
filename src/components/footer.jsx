import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
    let normal = {
        textDecoration: "none ",
        color: "#FFF",
    }
    return (
        <Grid container alignItems='center' justifyContent='center' sx={{ backgroundColor: "#000", minHeight: { xs: "0", md: "200px" } }} >
            <Grid item xs={4} sx={{ alignItems: "center", color: "#FFF", pl: { xs: '10px', md: "20px" } }}>
                <Typography variant='h6' component="h6" sx={{ pr: "20px" }}>PMlinks</Typography>
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: 'column', color: "#FFF" }}>
                <Typography variant='h6' component="h6" sx={{ fontSize: "16px", fontWeight: "700" }}>Policy</Typography>
                <Link style={normal} to='/'>Privacy Policy</Link>
                <Link style={normal} to='/about'>Payments Policy</Link>
                <Link style={normal} to='/contact'>Terms of Use</Link>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: 'column', color: "#FFF", pr: { xs: "10px", md: "20px" } }}>
                <Typography variant='h6' component="h6" sx={{ fontSize: "16px", fontWeight: "700" }}>Learn More</Typography>
                <Link style={normal} to='/'>Home</Link>
                <Link style={normal} to='/about'>About</Link>
                <Link style={normal} to='/contact'>Contact</Link>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h6' component="h6" sx={{ color: "#000", backgroundColor: "#FFF", textAlign: 'center', fontSize: "16px" }}>© {new Date().getFullYear()} PMlinks All rights reserved.</Typography>
            </Grid>
        </Grid>

    )
}

export default Footer;
