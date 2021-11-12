import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const Review = (props) => {
    const {description, img} =props.review;
  return (
    <Grid item xs={12} sm={12} md={4}>
    <Card  sx={{ maxWidth: 445 }}  style={{ margin: '2px', backgroundColor:'rgb(203, 255, 107)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" style={{color: 'rgb(8, 105, 40)'}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
}
export default Review;