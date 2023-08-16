import React from "react";
import "../assets/Css/style.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ActionAreaCard from "../components/card";
import profit from "../assets/image/profit.jpg";
import instantpay from "../assets/image/instantpay.jpg";
import cutomer from "../assets/image/cutomersupport.jpg";
import earn from "../assets/image/earn.jpg";
import urlshortner from "../assets/image/urlshortner.jpg";
import paypal from "../assets/image/paypal.jpg";
import gpay from "../assets/image/gpay.jpg";
import ppay from "../assets/image/phonepay.jpg";
import paytm from "../assets/image/paytm.jpg";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import LinkIcon from '@mui/icons-material/Link';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import { Block } from "@mui/icons-material";



const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#FFF"
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#FFF"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: "#FFF"
    },
    [`& .${outlinedInputClasses.input}`]: {
        color: "#FFF"
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
        color: "#FFF"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
        color: "#FFF"
    },
    [`& .${inputLabelClasses.outlined}`]: {
        color: "#FFF"
    },
    [`&:hover .${inputLabelClasses.outlined}`]: {
        color: "#FFF"
    },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
        color: "#FFF"
    }
});
function IndexPage() {
    let login = {
        textDecoration: "none",
        color: "#FFF",
        backgroundColor: "#e73c7e",
        px: "15px",
        py: "8px",
        borderRadius: "8px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        ":hover": { backgroundColor: "#e73c7e" },
        cursor: "pointer"
    }
    let signup = {
        textDecoration: "none",
        color: "#000",
        backgroundColor: "#FFF",
        px: "15px",
        py: "8px",
        borderRadius: "8px",
        mr: "20px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        ":hover": { backgroundColor: "#FFF" },
        cursor: "pointer"
    }

    return (
        <Grid container spacing={5}>

            <Grid item xs={12} className="landing" sx={{ py: { xs: "30px" }, height: { xs: "100%", md: "650px" }, display: "flex" }}>
                <Grid container spacing={2} sx={{ px: { xs: "20px", md: "30px" } }}>
                    <Grid item xs={12} sx={{ mt: "30px", textAlign: "center" }}>
                        <Typography variant="h1" component='h1' sx={{ fontSize: { md: "56px", xs: "28px", lg: "66px" }, fontWeight: "700", color: "#FFF" }}>India's Highest Paying Link Shortner With Single Pages</Typography>
                        <Typography variant="p" component="p" sx={{ fontSize: { md: "18px", xs: "14px", lg: "22px" }, py: { xs: "20px", md: "30px", color: "#FFF" } }}>If you want to have more than one stream of income, which is also as easy as sharing your favourite videos to your friend, you can do that using PMlinks.</Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button sx={signup}>Sign Up</Button>
                        <Button sx={login}>Log in</Button>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: "30px", textAlign: "center" }}>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={12} sm={10} lg={11}>
                                <StyledTextField fullWidth size="small" label="Paste Your Link" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={2} lg={1}>
                                <Button sx={{ backgroundColor: "#e73c7e", color: "#FFF", width: { xs: "130px", sm: "100%" }, ":hover": { backgroundColor: "#e73c7e" } }}>Get Link</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} className="bluebg">
                <Grid container justifyContent="center" alignItems='center' spacing={2} sx={{ px: { xs: "20px", md: "30px" } }}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard img={profit} text="Get $8 to $20 INR per 1000 views easily just by sharing our links" name="HIGHEST RATES" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard img={instantpay} text="You can withdraw your earning whenever you want and it doesn’t take much time." name="Easy and Quick Payouts" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard img={earn} text="Create an account, Create a link and Post it - for every visit, You earn Money" name="How Do I Earn?" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard img={cutomer} text="We are actively solving doubts and queries raised by our user." name="Customer Support" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className="bluebg">
                <Grid container spacing={2}>
                    <Grid item xs={12} className="pinkbg">
                        <Grid container spacing={2} sx={{ px: { xs: "20px", md: "30px" }, mb: "15px" }}>
                            <Grid item xs={12} md={6}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: "96%",
                                        width: '100%',
                                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                    }}
                                    alt="The house from the offer."
                                    src={urlshortner}

                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" component="h5" sx={{ fontWeight: "700", pb: "10px", color: "#23a6d5" }}>Wanna know how to earn using our tool?</Typography>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", pb: "10px" }}>Step 1:</Typography>
                                <Typography variant="p" component="p" sx={{ fontSize: { xs: "14px", md: "18px" } }}>&nbsp;&nbsp;&nbsp;&nbsp; Create an PMlinks account by signing up with us and become one of our first users.</Typography>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", pb: "10px" }}>Step 2:</Typography>
                                <Typography variant="p" component="p" sx={{ fontSize: { xs: "14px", md: "18px", fontSize: { xs: "16px", md: "16px" } } }}> &nbsp;&nbsp;&nbsp;&nbsp; Start shortening the links of your own or your favourite content which will bring in more views</Typography>
                                <Typography variant="h6" component="h6" sx={{ fontWeight: "600", pb: "10px" }}>Step 3:</Typography>
                                <Typography variant="p" component="p" sx={{ fontSize: { xs: "14px", md: "18px", fontSize: { xs: "16px", md: "16px" } } }}> &nbsp;&nbsp;&nbsp;&nbsp; Share the shortened link to your friends and family and start earning. Your new journey will begun.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} className="bluebg">
                <Grid container alignItems='center' spacing={2} sx={{ px: { xs: "20px", md: "30px" } }}>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Typography variant="h5" component='h5' sx={{ fontWeight: "700", color: "#23a6d5" }}>What makes us different & Our stats</Typography>
                        <Typography variant="h6" component='h6' sx={{ fontSize: { xs: "14px", md: "18px" } }}>Separate dashboards to each user gives you a transparent details about your stats and you can monitor your earnings</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container spacing={2} alignItems='center' sx={{ textAlign: "center", mb: "50px" }}>
                            <Grid item xs={6} sm={3}>
                                <AdsClickIcon sx={{ backgroundColor: "#FFF", color: "#e73c7e", p: "10px", width: "50px", height: "50px", borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} />
                                <Typography component='h6' variant="h6" sx={{ fontWeight: "700" }}>246738</Typography>
                                <Typography component='h5' variant="h5" sx={{ fontWeight: "700", fontSize: { xs: "16px", md: "22px" } }}>Total Clicks</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <LinkIcon sx={{ backgroundColor: "#FFF", color: "#e73c7e", p: "10px", width: "50px", height: "50px", borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} />
                                <Typography component='h6' variant="h6" sx={{ fontWeight: "700" }}>57</Typography>
                                <Typography component='h5' variant="h5" sx={{ fontWeight: "700", fontSize: { xs: "16px", md: "22px" } }}>Total Urls</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <PersonIcon sx={{ backgroundColor: "#FFF", color: "#e73c7e", p: "10px", width: "50px", height: "50px", borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} />
                                <Typography component='h6' variant="h6" sx={{ fontWeight: "700" }}>36</Typography>
                                <Typography component='h5' variant="h5" sx={{ fontWeight: "700", fontSize: { xs: "16px", md: "22px" } }}>Total Users</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <PaidIcon sx={{ backgroundColor: "#FFF", color: "#e73c7e", p: "10px", width: "50px", height: "50px", borderRadius: "12px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} />
                                <Typography component='h6' variant="h6" sx={{ fontWeight: "700" }}>$246</Typography>
                                <Typography component='h5' variant="h5" sx={{ fontWeight: "700", fontSize: { xs: "16px", md: "22px" } }}>Total Paid</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={12} className="pinkbg">
                <Grid container alignItems='center' sx={{ textAlign: "center", px: { xs: "20px", md: "30px" }, mb: "20px" }}>
                    <Grid item xs={12} sx={{ mb: "20px" }}>
                        <Typography variant="h5" component='h5' sx={{ fontWeight: "700", color: "#23a6d5" }}>Payout Via  Worldwide</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box
                            component="img"
                            sx={{
                                height: 70,
                                width: 150,
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                mb: "30px"
                            }}
                            alt="The house from the offer."
                            src={paypal}

                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box
                            component="img"
                            sx={{
                                height: 70,
                                width: 150,
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                mb: "30px"
                            }}
                            alt="The house from the offer."
                            src={gpay}

                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box
                            component="img"
                            sx={{
                                height: 70,
                                width: 150,
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                mb: "30px"
                            }}
                            alt="The house from the offer."
                            src={ppay}

                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box
                            component="img"
                            sx={{
                                height: 70,
                                width: 150,
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                maxHeight: "100%",
                                maxWidth: "100%",
                                mb: "30px"
                            }}
                            alt="The house from the offer."
                            src={paytm}

                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >)
}



export default IndexPage;