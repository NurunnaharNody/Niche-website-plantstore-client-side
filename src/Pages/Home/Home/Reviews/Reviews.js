import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
          fetch('https://agile-hollows-82713.herokuapp.com/reviews')
          .then(res => res.json())
          .then(data=> setReviews(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{color:' rgb(123, 221, 26)',fontSize:'30px'}} sx={{fontWeight:900, m:6}} variant="h2" component="div">
         Our Happy Customers
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 1, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {
                        reviews.map(review => <Review
                        key={review._id}
                            review={review}
                        ></Review>)
                    }
        </Grid>
        </Container>
      </Box>
    );
};

export default Reviews;