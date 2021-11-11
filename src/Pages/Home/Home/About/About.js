import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <Grid container spacing={3}  style={{paddingTop :'30px'}}>
  <Grid item xs={12} md={4}>
  <Box>
          <Typography style={{color:' rgb(123, 221, 26)'}} sx={{fontWeight:900, my:5}} variant="h4" component="div">
          Plant Store
        </Typography>
          <Typography variant="h6" sx={{ my:8, fontSize:17,fontWeight:200, color:'gray'}}>
          Plants are mainly multicellular organisms, 
          predominantly photosynthetic eukaryotes of the kingdom Plantae. 
          Historically, plants were treated as one of two kingdoms including 
          all living things that were not animals, and all algae and fungi were 
          treated as plants. 
          </Typography>
          <Button variant="contained"  style={{backgroundColor:'rgb(60, 192, 104)'}}>Learn More</Button>
         </Box>
  </Grid>
  <Grid item xs={12} md={4} sx={{my:5}}>
    <img src="https://i.ibb.co/BC1d7mg/banner-4.jpg" alt="" />
  </Grid>
  <Grid item xs={12} md={4} sx={{my:5}}>
    <img src="https://i.ibb.co/sypBx5h/banner-5.jpg" alt="" />
  </Grid>
</Grid>
    );
};

export default About;