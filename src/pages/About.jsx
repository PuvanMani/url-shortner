import React from "react";
import "../assets/Css/style.css";
import { Box, Grid, Typography } from "@mui/material";
import abt1 from "../assets/image/abt1.jpg"
import abt2 from "../assets/image/abt2.jpg"
import abt3 from "../assets/image/abt3.jpg"
import abt4 from "../assets/image/abt4.jpg"
import abt5 from "../assets/image/abt5.jpg"
function About() {
    let data = [
        {
            qus: "What is PMlinks ?",
            discription: "PMlinks is a tool you can use to shorten your link and can earn money through it. Sounds interesting right? Its that easy. Try it now",
            img: abt1
        },
        {
            qus: "How to be an PMlinks user?",
            discription: "Simply signup with your unique username and password, which is same as you creating your social media handles. Don’t forget to accepting our terms and conditions. Then after hitting the submit button you will become our new user.",
            img: abt2
        },
        {
            qus: "Withdraw Process:",
            discription: "As soon as you reach the minimum withdraw limit you can withdraw your money from us using online payment apps like PayPal, GooglePay , Paytm, Phonepay. We give instant transaction which take around 1 – 2 hours of time from your request.",
            img: abt3
        },
        {
            qus: "How to use the tool?",
            discription: "It’s a simple three step process explained in our Home page. Put your link in the input field given in the Home page and convert. Now you have a shortened link you need.",
            img: abt4
        },
        {
            qus: "Where can I share my PMlinks?",
            discription: "You can simply add it in the bio of your social media handle, YouTube videos’ description, WhatsApp status or in your own websites.",
            img: abt5
        },
    ]
    return (
        <Grid container rowSpacing={3} >

            <Grid item xs={12} sx={{ my: "20px" }}>
                <Typography variant="h6" component='h6' sx={{ fontSize: "30px", fontWeight: "700", textAlign: "center", backgroundColor: "#d2f3ff" }}>About</Typography>
            </Grid>

            {data.map((val, ind) => {
                return (<Grid item xs={12} sx={{ minHeight: { xs: "100%", md: "400px" }, display: 'flex', backgroundColor: ind % 2 == 0 ? "#FFF" : "#d2f3ff", px: "30px" }}>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={12} sm={6} sx={{ order: ind % 2 == 0 ? 0 : 1 }}>
                            <Box
                                component="img"
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    boxShadow: ind % 2 == 0 ? 0 : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                    borderRadius: "6px",
                                }}
                                alt="The house from the offer."
                                src={val.img}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component='h6' sx={{ fontSize: "24px", fontWeight: "700", }}>{val.qus}</Typography>
                            <Typography variant="p" component='p' sx={{ fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500", }}>{val.discription}</Typography>
                        </Grid>
                    </Grid>
                </Grid>)
            })}
        </Grid>
    )
}



export default About;