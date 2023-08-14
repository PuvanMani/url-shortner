import React from "react";
import "../assets/Css/style.css";
import { Box, Grid, Typography } from "@mui/material";
import abt1 from "../assets/image/abt1.jpg"
import abt2 from "../assets/image/abt2.jpg"
import abt3 from "../assets/image/abt3.jpg"
import abt4 from "../assets/image/abt4.jpg"
import abt5 from "../assets/image/abt5.jpg"
function About() {
    return (
        <Grid container spacing={4} sx={{ px: "30px", mb: "20px" }}>

            <Grid item xs={12} sx={{ mt: "20px" }}>
                <Typography variant="h6" component='h6' sx={{ fontSize: "30px", fontWeight: "700", textAlign: "center" }}>About</Typography>
            </Grid>

            <Grid item xs={12} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="img"
                            sx={{
                                height: { xs: "110%", md: "100%" },
                                width: "100%",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                borderRadius: "6px",
                            }}
                            alt="The house from the offer."
                            src={abt1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" component='h6' sx={{ fontSize: "26px", fontWeight: "700", }}>What is PMlinks ?</Typography>
                        <Typography variant="p" component='p' sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "500", }}>PMlinks is a tool you can use to shorten your link and can earn money through it. Sounds interesting right? Its that easy. Try it now</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} sx={{ order: { xs: 0, sm: 1 } }}>
                        <Box
                            component="img"
                            sx={{
                                height: { xs: "110%", md: "100%" },
                                width: "100%",
                                borderRadius: "6px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            }}
                            alt="The house from the offer."
                            src={abt2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" component='h6' sx={{ fontSize: "26px", fontWeight: "700", }}>How to be an PMlinks user?</Typography>
                        <Typography variant="p" component='p' sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "500", }}>Simply signup with your unique username and password, which is same as you creating your social media handles. Don’t forget to accepting our terms and conditions. Then after hitting the submit button you will become our new user.</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} >
                        <Box
                            component="img"
                            sx={{
                                height: { xs: "110%", md: "100%" },
                                width: "100%",
                                borderRadius: "6px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            }}
                            alt="The house from the offer."
                            src={abt3}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" component='h6' sx={{ fontSize: "26px", fontWeight: "700", }}>Withdraw Process:</Typography>
                        <Typography variant="p" component='p' sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "500", }}>As soon as you reach the minimum withdraw limit you can withdraw your money from us using online payment apps like PayPal, GooglePay , Paytm, Phonepay. We give instant transaction which take around 1 – 2 hours of time from your request.</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} sx={{ order: { xs: 0, sm: 1 } }}>
                        <Box
                            component="img"
                            sx={{
                                height: { xs: "110%", md: "100%" },
                                width: "100%",
                                borderRadius: "6px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            }}
                            alt="The house from the offer."
                            src={abt4}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" component='h6' sx={{ fontSize: "26px", fontWeight: "700", }}>How to use the tool?</Typography>
                        <Typography variant="p" component='p' sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "500", }}>It’s a simple three step process explained in our Home page. Put your link in the input field given in the Home page and convert. Now you have a shortened link you need.</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="img"
                            sx={{
                                height: { xs: "110%", md: "100%" },
                                width: "100%",
                                borderRadius: "6px",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            }}
                            alt="The house from the offer."
                            src={abt5}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" component='h6' sx={{ fontSize: "26px", fontWeight: "700", }}>Where can I share my PMlinks?</Typography>
                        <Typography variant="p" component='p' sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "500", }}>You can simply add it in the bio of your social media handle, YouTube videos’ description, WhatsApp status or in your own websites.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}



export default About;