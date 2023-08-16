import React from "react";
import "../assets/Css/style.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Contact() {
    return (
        <Grid container sx={{ my: "10px", }} rowSpacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" component='h6' sx={{ fontSize: "30px", fontWeight: "700", textAlign: "center", backgroundColor: "#d2f3ff", px: "20px" }}>Contact</Typography>
                <Typography variant="h6" component='h6' sx={{ fontSize: { xs: "12px", md: "18px" }, fontWeight: "700", textAlign: "center", mt: "20px" }}>Our team is always active and eager to provide service to you. Be free to ask anything to us.</Typography>
                <Typography variant="h6" component='h6' sx={{ fontSize: { xs: "12px", md: "18px" }, fontWeight: "700", textAlign: "center", mb: "20px" }}>Fill the below details and our team will contact you.</Typography>
            </Grid>

            <Grid item xs={12} md={6} sx={{ backgroundColor: "#d2f3ff", px: "20px" }}>
                <Grid container spacing={2} >
                    <Typography variant="h6" component='h6' sx={{ fontWeight: "700", px: { xs: "15px" } }}>Get In Touch</Typography>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="First Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" multiline rows={5} fullWidth placeholder="Name" size="small" label="Message" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Sumbit</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ backgroundColor: "#d2f3ff", px: "20px" }}>
                <Typography variant="h6" component='h6' sx={{ fontWeight: "700", fontSize: { xs: "14px", md: "18px" } }}>Address</Typography>
                <Typography variant="h6" component='h6' sx={{ fontWeight: "700", fontSize: { xs: "14px", md: "18px" } }}>Name: Puvan</Typography>
                <Typography variant="h6" component='h6' sx={{ fontWeight: "700", fontSize: { xs: "14px", md: "18px" } }}>Name: Puvan Mail : puvanmani15@gmail.com</Typography>
                <Typography variant="h6" component='h6' sx={{ fontWeight: "700", fontSize: { xs: "14px", md: "18px" } }}>Address: Tenkasi, Tamil Nadu, India</Typography>

            </Grid>

        </Grid>
    )
}



export default Contact;