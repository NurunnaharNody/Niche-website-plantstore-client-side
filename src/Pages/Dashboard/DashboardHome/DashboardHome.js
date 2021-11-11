import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DashboardHome = () => {
    return (
        <Box container>
         <Typography style={{color:' rgb(123, 221, 26)', fontSize:'80px'}} sx={{fontWeight:900, my:5}} variant="h1" component="div">
          Welcome to dashboard
        </Typography>
</Box> 
    );
};

export default DashboardHome;