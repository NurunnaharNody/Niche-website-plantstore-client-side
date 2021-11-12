import {  Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://agile-hollows-82713.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added A Plant Service Successfully');
                reset();
            }
        })
    };
    return (
        <Box className="add-review-service">
            <Typography style={{color:' rgb(123, 221, 26)', fontSize:'40px'}} sx={{fontWeight:900, my:5}} variant="h1" component="div">
          Add Your Experience With Us..:)
        </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
           <textarea {...register("description")} placeholder="Details"/>
           <input {...register("img")} placeholder="Img url" />
           <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rating" />
           <input className="add-review-button" type="submit" />
    </form>
        </Box>
    );
};

export default AddReview;