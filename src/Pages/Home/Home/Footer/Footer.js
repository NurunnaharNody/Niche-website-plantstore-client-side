import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return(
    <Grid container spacing={4} style={{ marginTop:'40px',padding: '30px', backgroundColor:'black'}}>
    <Grid item xs={12} md={3}>
    <Box>
           <Typography variant="h6" sx={{ my:5, fontSize:20,fontWeight:500, color:'white'}}>
           ABOUT US
            </Typography>
            <Typography variant="h6" sx={{ my:6, fontSize:17,fontWeight:200, color:'gray'}}>
            ADD: 123 Suspendis, Sollicitudin District, Accums. <br />
            TEL: (+84) 0123456789 <br />
            MAIL: sales@yoursite.com
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'rgb(60, 192, 104)'}}>Visit Us</Button>
           </Box>
    </Grid>
    <Grid item xs={12} md={3}>
    <Box>
           <Typography variant="h6" sx={{ my:5, fontSize:20,fontWeight:500, color:'white'}}>
           OUR SERVICE
            </Typography>
            <Typography variant="h6" sx={{ my:6, fontSize:17,fontWeight:200, color:'gray'}}>
            About Us <br />
             Protection Plans  <br />
            Installation  <br />
            Return Policy
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'rgb(60, 192, 104)'}}>Go to Service</Button>
           </Box>
    </Grid>
    <Grid item xs={12} md={3}>
    <Box>
           <Typography variant="h6" sx={{ my:5, fontSize:20,fontWeight:500, color:'white'}}>
           ORDERS
            </Typography>
            <Typography variant="h6" sx={{ my:6, fontSize:17,fontWeight:200, color:'gray'}}>
            
         Contact Us <br />
         Men  <br />
         Accessories <br/>
         shop
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'rgb(60, 192, 104)'}}>Place order</Button>
           </Box>
    </Grid>
    <Grid item xs={12} md={3}>
    <Box>
           <Typography variant="h6" sx={{ my:5, fontSize:20,fontWeight:500, color:'white'}}>
           Everything House Plants
            </Typography>
            <Typography variant="h6" sx={{ my:8, fontSize:17,fontWeight:200, color:'gray'}}>
            We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our PlantStore to yours! 
            </Typography>
           </Box>
           <Box sx={{textAlign: 'center'}}>
    <Typography variant="h6" sx={{ my:8, fontSize:17,fontWeight:200, color:'gray'}}>
  Connect with us on social and share your plants with #plantstore
        </Typography>
        </Box>
    </Grid>
    
  </Grid>
      );
  };

export default Footer;