import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Pay = () => {
    return (
       <Box container>
           <img style={{width:'50%'}} src="https://i.ibb.co/pbvxRHy/Close-up-shot-of-a-patient-paying-medical-bill-with-contactless-credit-card-payment-at-reception-des.jpg" alt="" />
 <Typography style={{color:' rgb(123, 221, 26)', fontSize:'40px'}} sx={{fontWeight:900, my:5}} variant="h1" component="div">
          Payment system coming soon.
        </Typography>
       </Box>
    );
};

export default Pay;