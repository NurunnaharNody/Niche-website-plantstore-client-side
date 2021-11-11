import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Box>
                <Grid item xs={12} md={12}>
                    <img style={{ width: '50%', height:'300px' }} src='https://i.ibb.co/4sSsVch/photo-1487611459768-bd414656ea10.jpg' alt="" />
                </Grid>
            <Container>
                <Grid container item sx={{ mt: 8, textAlign:'center' }} xs={12} md={12}>
                    <Typography style={{textAlign:'center',paddingLeft: '10px',fontWeight: 900, color:' rgb(123, 221, 26)'}} variant="h4" gutterBottom>
                        Registration
                        </Typography> <br /> <br />
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField 
                      sx={{width:'75%' , m:3}}
                      id="standard-basic" 
                      label="Your Name"
                       name="name" 
                       type="name"
                    onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField
                            sx={{ width: '70%', m: 3 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '70%', m: 3 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '70%', m: 3 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '70%', m: 3 }} style={{backgroundColor:'rgb(60, 192, 104)'}} type="submit" variant="contained">Register</Button> <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;