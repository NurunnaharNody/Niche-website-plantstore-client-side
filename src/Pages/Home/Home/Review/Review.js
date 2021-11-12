import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Rating from 'react-rating';

const Review = (props) => {
    const {name,description, img, rating} =props.review;
  return (
    <Grid item xs={12} sm={12} md={4}>
    <Card  sx={{ maxWidth: 445 }}  style={{ margin: '2px', backgroundColor:'rgb(134, 224, 141)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
        <Typography variant="body2" style={{color: 'rgb(80, 20, 3)', fontSize: '20px', fontWeight:'bolder'}}>
             {name}
          </Typography>
          <Typography variant="body2" style={{color: 'rgb(8, 105, 40)'}}>
            {description}
          </Typography>
          <Rating
          style={{color: 'rgb(3, 85, 10)'}}
          initialRating={rating}
           emptySymbol="far fa-star"
            fullSymbol="fas fa-star"></Rating>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
export default Review;