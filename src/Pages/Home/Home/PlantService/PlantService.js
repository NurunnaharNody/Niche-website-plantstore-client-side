import { Button, CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const PlantService = (props) => {
    const {_id,name, description, price, img} =props.service;
    return (
        <Grid item xs={2} sm={12} md={4}>
        <Card sx={{  border:0,  boxShadow: 0}}>
        <CardMedia
        component="img"
        style={{width: 'auto', margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography style={{color:'rgb(7, 109, 12)', fontWeight:900}} variant="h5" component="div">
          {name}
        </Typography>
        <Typography style={{color:'rgb(21, 32, 1)',fontWeight:900}}  variant="h5" component="div">
          {price}
        </Typography>
        <Typography  style={{color:'rgb(70, 199, 76)', fontWeight:900}} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />
        <br />
        <Link style={{textDecoration:'none'}} to={`/orderDetails/${_id}`}><Button variant="contained"  style={{ backgroundColor:'rgb(88, 192, 104)'}}>Buy Now</Button> </Link>
      </CardContent>
    </Card>
      </Grid>
    );
};

export default PlantService;