import React, { useEffect, useState } from 'react'

import TodoItem from '../components/TodoItem';
import TodoList from '../components/TodoList';
import { Typography } from '@mui/material';
import axios from "axios"


const HomePage = () => {

// const getUserData = async () => {

//     try{
        
//         const res = await axios.post("http://localhost:5000/api/v1/auth/getUserData",{},
//         {
//         headers: {
//             Authorization: "Bearer" + localStorage.getItem("token")
//         }
//         },
//         )
        


//     }catch(e){
//         console.log(e);
//     }


// }

// useEffect(() => {
//     getUserData()
// },[]);



return (
    <>
        
        <Typography gutterBottom  variant="h2" component="div" textAlign="center"  color="text.secondary" marginTop="15px">
            Todo List
        </Typography>

        <TodoList/>




      
     
    </>
)
}

export default HomePage