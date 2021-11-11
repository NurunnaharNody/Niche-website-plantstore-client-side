import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AllPlantService from '../AllPantService/AllPlantService';


const AllPlantServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
          fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data=> setServices(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{color:' rgb(123, 221, 26)'}} sx={{fontWeight:900, m:6}} variant="h4" component="div">
          This all lovable plants available in our store..!
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
                        services.map(service => <AllPlantService
                            key={service._id}
                            service={service}
                        ></AllPlantService>)
                    }
        </Grid>
        </Container>
      </Box>
    );
   
};

export default AllPlantServices;