import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
      <Container>
        <Grid container spacing={3}  style={{paddingTop :'30px'}}>
  <Grid item xs={12} sm={12} md={12}>
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
  <Grid item xs={12} sm={12} md={12} sx={{my:5}}>
    <img  style={{width: 'auto'}} src="https://i.ibb.co/BC1d7mg/banner-4.jpg" alt="" />
  </Grid>
  <Grid item xs={12} sm={12} md={12} sx={{my:5}}>
    <img  style={{width: 'auto'}} src="https://i.ibb.co/sypBx5h/banner-5.jpg" alt="" />
  </Grid>
</Grid>
</Container>
    );
};

export default About;