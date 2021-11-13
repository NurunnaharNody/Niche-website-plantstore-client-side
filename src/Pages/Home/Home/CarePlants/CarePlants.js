import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CarePlants = () => {
    return (
        <Container  sx={{ flexGrow: 1, pt:8 }} style={{backgroundColor: 'rgb(255, 218, 236)', marginTop:'30px'}}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <img style={{width:'85%', paddingBottom:'20px'}}  src="https://i.ibb.co/fvy6gp8/pf-dd852d18-5-Air-Plant-Fertilizer.jpg" alt="" />
         
        </Grid>
        <Grid item xs={12} md={7} sx={{textAlign:'left'}} >
        <Box>
         <Typography variant="h4" sx={{ my:5, fontSize:35,fontWeight:600}} style={{color:'rgb(78, 192, 104)'}}>
            Plant Care
          </Typography>
          <Typography variant="h6" sx={{ my:8, fontSize:17,fontWeight:200, color:'gray'}}>
          Air plants are easy to grow, but they must be given the appropriate care in order to thrive. Proper watering and lighting are the most important components of plant care,
           but humidity and temperature also play a role.
          </Typography>
          <Button variant="contained"  style={{backgroundColor:'rgb(88, 192, 104)', marginBottom: '20px'}}>Read More About Plant Care</Button>
         </Box>
        </Grid>
    </Grid>
    </Container>
    );
};

export default CarePlants;