import { Button, TextField, Alert, Typography } from '@mui/material';
import React, { useState } from 'react';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://agile-hollows-82713.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
             <Typography style={{color:' rgb(123, 221, 26)', fontSize:'30px'}} sx={{fontWeight:900, my:5}} variant="h1" component="div">
           Make An Admin
        </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '30%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" style={{backgroundColor:'rgb(60, 192, 104)'}} variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;