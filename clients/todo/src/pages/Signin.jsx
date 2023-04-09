import React, { useState } from 'react'
import { Button, Card, Container, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

const Signin = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
    
  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
        
        //with proxy
        const res = await axios.post(`${BASE_URL}/api/v1/auth/login`,{email, password});
     
        if(res.data.success){
       
            localStorage.setItem("token", res.data.token);
            
            
            navigate("/")
        }else{
            console.log(res.data.error);
          
        }
    }catch(error){
        console.log("something went wrong",error);
        
    }
}


  return (
    <> 
    <Container sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Card  sx={{ maxWidth: 445, mt:"10%"}}>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
            Login Page
        </Typography>
        <form
        
          onSubmit={handleSubmit}
        >
        
        
        <TextField 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic" 
        fullWidth 
        label="Email" 
        variant="outlined"  size="small" sx={{mb:"20px"}} />
        <TextField  
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic" 
        fullWidth 
        label="Password" 
        type='password'
        variant="outlined"  
        size="small" 
        sx={{mb:"20px"}} 
        />
        <Typography textAlign="center" marginBottom="10px">
            Forgot Password? <Link to="/reset">Reset Password</Link>
        </Typography>
        <Button type='submit' variant="contained" fullWidth>Login</Button>
        <Typography textAlign="center" marginTop="10px">
            Don't Have Account? <Link to="/signup">Sign Up</Link>
        </Typography>
        
        </form>
        </Card>
        </Container> 
    </>
  )
}

export default Signin