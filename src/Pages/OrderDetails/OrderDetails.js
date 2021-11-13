import {  Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import './OrderDetails.css'
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(157, 238, 77, 0.692);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 500,
  bgcolor: 'rgba(95, 165, 25, 0.774)',
  border: '2px solid rgb(31, 53, 10)',
  p: 2,
  px: 4,
  pb: 3,
};

const OrderDetails = () => {
    const { serviceId } = useParams();
     const [service, setService] =useState({});
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const {user} = useAuth();
     const { register, handleSubmit, reset } = useForm();
     
    useEffect( () =>{
        fetch(`https://agile-hollows-82713.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])

    const onSubmit = data => {
      console.log(data)
      axios.post('https://agile-hollows-82713.herokuapp.com/orders', data)
      .then(res => {
          if(res.data.insertedId){
              alert('Added your Order to the cart Successfully');
              reset();
          }
      })
  };
    return (
        <Grid item xs={2} sm={12} md={12}>
        <Card sx={{  border:0,  boxShadow: 0}}>
        <CardMedia
        component="img"
        style={{width: 'auto', margin:'0 auto'}}
        image={service.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography style={{color:'rgb(7, 109, 12)', fontWeight:900}} variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography style={{color:'rgb(21, 32, 1)',fontWeight:900}}  variant="h5" component="div">
          {service.price}
        </Typography>
        <Typography  style={{color:'rgb(70, 199, 76)', fontWeight:900}} variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
    <div>
    <button className="button-order-place" type="button" onClick={handleOpen}>
        Purchase Now
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style} className="modal-details">
          <h2 id="unstyled-modal-title">Please Give this information to confirm your order.!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}
        value={service.name} /> <br/>
          <input {...register("id")}
        value={service._id} /> <br/>
    <input {...register("username", { required: true, maxLength: 20 })}
        value={user.displayName} /> <br/>
        <input {...register("email", { required: true, maxLength: 20 })}
        value={user.email} /> <br/>
    <textarea {...register("location")} placeholder="Your Location Please!!"/> <br/>
    <input type="number" {...register("count", { min: 0, max: 5 })} placeholder="How Much?" /> <br/>
          <input className="add-review-button" type="submit" />
    </form>
      <p id="unstyled-modal-description">Thanks For Being With us.!! 
          Click anywhere to go back.</p>
        </Box>
      </StyledModal>
    </div>
      </Grid>
    );
};

export default OrderDetails;