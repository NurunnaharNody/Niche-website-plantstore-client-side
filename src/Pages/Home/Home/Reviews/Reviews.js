import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Review from '../Review/Review';



const reviews = [
    {
        description: 'This plant arrived packaged well, just like all of my other orders and just look how beautiful it is!  This store is awesome & really stands behind their live goods!!',
        img:'https://i.ibb.co/p2Lw0q4/VJc0p-Tgvj-mid.jpg'
    },
    {

        description: 'Beautiful plant. Came in great condition',
        img: 'https://i.ibb.co/tH5kJgr/Nyv-OH80-Lj-mid.jpg'
    },
    {
    
        description: 'I am so happy to see this beautiful plant',
        img: 'https://i.ibb.co/crYVts8/VJAHr-ICUj-mid.jpg'
    },
    {
      
        description: 'Delivery was on time and showed up in immaculate condition. 10/10 would recommend',
        img:'https://i.ibb.co/ZYT1jh2/N1f-M8-To-Li-mid.jpg'
    },
    {
    
        description: 'Perfect! Very healthy when they arrived. Packaging was perfect.',
        img: 'https://i.ibb.co/wYZ2542/Nk-ufi0-Uj-mid.jpg'
    }
]
const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{color:' rgb(123, 221, 26)'}} sx={{fontWeight:900, m:6}} variant="h4" component="div">
         Our Happy Customers
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
                        reviews.map(review => <Review
                            review={review}
                        ></Review>)
                    }
        </Grid>
        </Container>
      </Box>
    );
};

export default Reviews;