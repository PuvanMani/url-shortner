import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaidIcon from '@mui/icons-material/Paid';
import DataGrid from '../../components/DataGrid';

function DashboardPage() {
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'Orginal Link',
            width: 200,
        },
        {
            field: 'lastName',
            headerName: 'Shorted Link',
            width: 200,
        },
        {
            field: 'age',
            headerName: 'Impression',
            width: 200,
        },
        {
            field: 'fullName',
            headerName: 'Link Earned',
            sortable: false,
            width: 200,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];


    return (
        <Grid container justifyContent='center' alignItems='center' spacing={3} sx={{ px: "20px" }}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={10} lg={11}>
                        <TextField fullWidth size="small" label="Paste Your Link" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={2} lg={1}>
                        <Button sx={{ backgroundColor: "#11FF9B", color: "#000", width: { xs: "150px", md: "100%" }, ":hover": { backgroundColor: "#11FF9B" } }}>Get Link</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "150px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>
                        <AdsClickIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>$10</Typography>
                        <Typography variant='h6' component='h6'>Every 1K Views</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "150px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>
                        <AdsClickIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>5234</Typography>
                        <Typography variant='h6' component='h6'>Total Impressions</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "150px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
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
                <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-evenly", minHeight: "150px", width: "100%", p: "20px", backgroundColor: "#FFF", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>
                    <Box>
                        <PriceCheckIcon sx={{ width: "60px", height: "60px", color: "#11FF9B" }} />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='h6' sx={{ fontWeight: "700", fontSize: "30px" }}>$27</Typography>
                        <Typography variant='h6' component='h6'>Total Withdrawal</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <DataGrid rows={rows} columns={columns} id="id" />
            </Grid>
        </Grid>
    )
}

export default DashboardPage
