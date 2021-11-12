import {  Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPlant.css';

const AddPlant = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://agile-hollows-82713.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added A Plant Service Successfully');
                reset();
            }
        })
    };
    return (
        <Box className="add-plant-service">
            <Typography style={{color:' rgb(123, 221, 26)', fontSize:'20px'}} sx={{fontWeight:900, my:5}} variant="h1" component="div">
          Add A Plant Service
        </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })}
           placeholder="Plant Name" />
           <textarea {...register("description")} placeholder="Details"/>
           <input type="number" {...register("price")} placeholder="Price" />
           <input {...register("img")} placeholder="Img url" />
           <input className="add-plant-button" type="submit" />
    </form>
        </Box>
    );
};

export default AddPlant;                                                                                                                                                                                                                                       