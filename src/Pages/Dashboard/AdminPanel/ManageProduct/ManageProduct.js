import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
          fetch('https://agile-hollows-82713.herokuapp.com/services')
          .then(res => res.json())
          .then(data => setProducts(data))
    },[])


    const handleDelete = id =>{
        const url = `https://agile-hollows-82713.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('Successfully Deleted')
                const remaining = products.filter(product => product._id !== id)
            setProducts(remaining);
            }
            
           
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{color:' rgb(123, 221, 26)'}} sx={{fontWeight:900, m:6}} variant="h4" component="div">
          Manage Your products
        </Typography>
                {
                    products.map(product => <div key={product._id}>
        <Grid item sm={12} md={12}>
        <Card sx={{  border:0,  boxShadow: 0}}>
        <CardMedia
        component="img"
        style={{width: 'auto', margin:'0 auto'}}
        image={product.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography style={{color:'rgb(7, 109, 12)', fontWeight:900}} variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography style={{color:'rgb(21, 32, 1)',fontWeight:900}}  variant="h5" component="div">
          {product.price}
        </Typography>
        <Typography  style={{color:'rgb(70, 199, 76)', fontWeight:900}} variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
    <Button variant="contained" style={{margin:'5px', backgroundColor:'rgb(255, 31, 31)', fontSize:'16px', color:'rgb(70, 199, 76)', fontWeight:900}} onClick={() => handleDelete(product._id)}>Delete</Button>
    </Grid>
      </div>
      )
        }
        </Container>
      </Box>
    );
};

export default ManageProducts;