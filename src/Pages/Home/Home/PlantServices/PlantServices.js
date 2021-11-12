import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import PlantService from '../PlantService/PlantService';

const PlantServices = () => {  
    const [services, setServices] = useState([]);
    useEffect(() => {
          fetch('https://agile-hollows-82713.herokuapp.com/services')
          .then(res => res.json())
          .then(data=> setServices(data.slice(0,6)));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography style={{color:' rgb(123, 221, 26)'}} sx={{fontWeight:900, m:6}} variant="h4" component="div">
          Here Your Lovable Plants
        </Typography>
        <Grid container spacing={{ xs:1 ,sm:1, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {
                        services.map(service => <PlantService
                            key={service.name}
                            service={service}
                        ></PlantService>)
                    }
        </Grid>
        </Container>
      </Box>
    );
};


export default PlantServices;