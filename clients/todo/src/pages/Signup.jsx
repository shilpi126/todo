import { Box, Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  Form, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            
            //with proxy
            const res = await axios.post(`${BASE_URL}/api/v1/auth/signup`,{name, email, password});
            console.log(res.data);
            if(res.data.success){
                
                console.log(res.data.success);
                navigate("/login")
            }else{
                
                console.log(res.data.error);
            }
        }catch(error){
            console.log("something went wrong",error.message);
            
        }
    }
    
    return (
    <>
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Card  sx={{ maxWidth: 445, mt:"10%",}}>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
            SignUp Page
        </Typography>
        <CardContent>
        <form
        
        onSubmit={handleSubmit}
        
        >
     
        <TextField 
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic" 
        fullWidth label="Name" 
        variant="outlined"  
        size="small"  
        sx={{mb:"20px"}}
        />

        <TextField 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic" 
        fullWidth 
        label="Email" 
        variant="outlined"  
        size="small" 
        sx={{mb:"20px"}} 
        />

        <TextField 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        id="outlined-basic" 
        fullWidth 
        label="Password" 
        variant="outlined"  
        size="small" 
        sx={{mb:"20px"}} 
        />
        <Button 
        variant="contained" 
        fullWidth
        type="submit"
        >
            Sign Up
        </Button>
        <Typography 
        gutterBottom 
        component="div" 
        textAlign="center" 
        marginTop="20px"
        
        
        >
            Already Have Account 
            <Link to="/login">Login</Link>
        </Typography>
       
        </form>
        </CardContent>
        </Card>
        </Container>
    </>
    )
}

export default Signup