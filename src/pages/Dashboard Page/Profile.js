import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Profile() {
    return (
        <Grid container spacing={2} justifyContent='center' alignItems='center' >
            <Grid item xs={12} md={8}>
                <Typography variant="h6" component='h6' sx={{ fontWeight: "700", px: { xs: "15px" }, textAlign: "center" }}>Profile Info</Typography>

            </Grid>
            <Grid item xs={12} md={8}>
                <TextField variant="outlined" fullWidth placeholder="First Name" size="small" label="First Name" />
            </Grid>
            <Grid item xs={12} md={8}>
                <TextField variant="outlined" fullWidth placeholder="Last Name" size="small" label="Last Name" />
            </Grid>
            <Grid item xs={12} md={8}>
                <TextField variant="outlined" fullWidth placeholder="Email" size="small" label="Email" />
            </Grid>
            <Grid item xs={12} md={8}>
                <TextField variant="outlined" fullWidth placeholder="Total Earnings" size="small" label="Total Earnings" />
            </Grid>
        </Grid>
    )
}

export default Profile
