import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ text, name, img }) {
    return (
        <Card sx={{ maxWidth: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <CardActionArea sx={{ border: "2px solid #23a6d5" }}>
                <CardMedia
                    component="img"
                    sx={{ borderBottom: "3px solid #e73c7e" }}
                    height="150px"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom sx={{ color: "#e73c7e", fontWeight: "bold" }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant="body2" >
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}