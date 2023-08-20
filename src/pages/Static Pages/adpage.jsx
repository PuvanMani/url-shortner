import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdSense from "react-adsense";

function AdPage() {
    useEffect(() => {
        // console.log(window)
        // (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AdSense.Google
                    client="ca-pub-5829169251913743"
                    slot='4263374839'
                    style={{ width: "100%", height: "400px", display: 'block' }}
                    format='autorelaxed'
                    className="adsbygoogle"
                    responsive='true'
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h4' component='h4'>Click above &#9757; or below &#128071; the ad then you we got the Continue Button </Typography>
            </Grid>
            <Grid item xs={12}>
                <AdSense.Google
                    style={{ display: 'block', width: '100%', height: "400px" }}
                    client="ca-pub-5829169251913743"
                    slot='1828783187'
                    format='auto'
                    responsive='true'
                    className="adsbygoogle"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant='contained' sx={{ my: "50px" }}>Continue</Button>
            </Grid>
        </Grid>
    );
}

export default AdPage;
