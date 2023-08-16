import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import AdsClickIcon from '@mui/icons-material/AdsClick';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaidIcon from '@mui/icons-material/Paid';

function Profile() {
    return (
        <Grid container alignItems='center' spacing={3} sx={{ my: "20px", px: "20px" }}>
            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "200px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>
                        <AdsClickIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>5234</Typography>
                        <Typography variant='h6' component='h6'>Total Clicks</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "200px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>
                        <AdsClickIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>258</Typography>
                        <Typography variant='h6' component='h6'>Today Clicks</Typography>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "200px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>

                        <PaidIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>$34</Typography>
                        <Typography variant='h6' component='h6'>Total Earnings</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "200px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>
                        <PriceCheckIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>$27</Typography>
                        <Typography variant='h6' component='h6'>Total Withdrawal</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ my: "30px", textAlign: "center" }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={10} lg={11}>
                        <TextField fullWidth size="small" label="Paste Your Link" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={2} lg={1}>
                        <Button sx={{ backgroundColor: "#11FF9B", color: "#000", width: { xs: "150px", md: "100%" }, ":hover": { backgroundColor: "#11FF9B" } }}>Get Link</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                    <Typography variant="h6" component='h6' sx={{ fontWeight: "700", px: { xs: "15px" } }}>Withdrawal Amount</Typography>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            size='small'

                            options={["Gpay", "Phoepay", "PyaTM", "PayPal"]}
                            renderInput={(params) => <TextField {...params} fullWidth label="Select Payment Method" />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth placeholder="Number or UPI" size="small" label="Number or UPI" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="Withdrawal Amount" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Withdraw</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile;
