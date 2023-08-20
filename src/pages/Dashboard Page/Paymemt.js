import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Paymemt() {
    return (
        <Grid container spacing={2} justifyContent='center' alignItems='center' >
            <Grid item xs={8}>
                <Typography variant="h6" component='h6' sx={{ fontWeight: "700", px: { xs: "15px" }, textAlign: "center" }}>Withdrawal Amount</Typography>

            </Grid>
            <Grid item xs={8}>
                <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="Name" />
            </Grid>
            <Grid item xs={8}>
                <Autocomplete
                    disablePortal
                    size='small'

                    options={["Gpay", "Phoepay", "PyaTM", "PayPal"]}
                    renderInput={(params) => <TextField {...params} fullWidth label="Select Payment Method" />}
                />
            </Grid>
            <Grid item xs={8}>
                <TextField variant="outlined" fullWidth placeholder="Number or UPI" size="small" label="Number or UPI" />
            </Grid>
            <Grid item xs={8}>
                <TextField variant="outlined" fullWidth placeholder="Name" size="small" label="Withdrawal Amount" />
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained">Withdraw</Button>
            </Grid>
        </Grid>
    )
}

export default Paymemt
