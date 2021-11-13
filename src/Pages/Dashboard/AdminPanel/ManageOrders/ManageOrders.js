import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
          fetch(`https://agile-hollows-82713.herokuapp.com/orders`)
          .then(res => res.json())
          .then(data =>setOrders(data))
    },[])


    const handleDelete = id =>{
        const url = `https://agile-hollows-82713.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('You Want to cancel this order?? Then press ok!')
                const remaining = orders.filter(order => order._id !== id)
            setOrders(remaining);
            }
            
           
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{color:' rgb(123, 221, 26)'}} sx={{fontWeight:900, m:6}} variant="h4" component="div">
          Review user orders
        </Typography>
                { 
                   orders.map(order => <div key={order._id}>
                       <Grid item xs={2} sm={12} md={12}>
        <Card sx={{ border:1,  boxShadow: 2}} style={{backgroundColor:'rgb(207, 255, 185)'}}>
      <CardContent>
      <Typography style={{color:'rgb(146, 41, 15)', fontWeight:900}} variant="h5" component="div">
         Name of plant: {order.name}
        </Typography>
        <Typography style={{color:'rgb(146, 41, 15)', fontWeight:900}} variant="h5" component="div">
         Name of orderer: {order.username}
        </Typography>
        <Typography style={{color:'rgb(146, 41, 15)', fontWeight:900}} variant="h5" component="div">
          Email: {order.email}
        </Typography>
        <Typography style={{color:'rgb(80, 20, 5)',fontWeight:900}}  variant="h5" component="div">
          Amount of Plants: {order.count}
        </Typography>
        <Typography  style={{color:'rgb(80, 20, 5)', fontWeight:900}} variant="h5" color="text.secondary">
          Address: {order.location}
        </Typography>
      </CardContent>
    </Card>
    <Button variant="contained" style={{margin:'5px', backgroundColor:'rgb(255, 31, 31)', fontSize:'16px', color:'rgb(70, 199, 76)', fontWeight:900}} onClick={() => handleDelete(order._id)}>Cancel</Button>
    </Grid>
      </div>
      )
        };
        </Container>
      </Box>
       
    );
};

export default ManageOrders;