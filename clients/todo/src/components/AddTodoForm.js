import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



import { addTodoAsync } from '../redux/todoSlice';
import { Box, Button, CardContent, Container, TextField,Card, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const AddTodoForm = () => {
    const navigate = useNavigate()

	const [value, setValue] = useState('');
    const dispatch = useDispatch();
    
	

	const onSubmit = (event) => {
		event.preventDefault();
		
	    dispatch(
			addTodoAsync(value))

			navigate("/")
	};


	return (
		<Container sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
		<Card sx={{mt:"100px" , width:"600px"}}>
			
				<Typography textAlign="center" variant='h5'>Add Todo</Typography>
				<CardContent sx={{ml:"30px"}}>
		<form onSubmit={onSubmit} >
		
			<TextField
			    sx={{ width:"500px"}}
				type='text'
				multiline
				rows={4}
				
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></TextField>

			
			<Button type='submit' fullWidth  >
				Submit
			</Button>
			
		</form>
		</CardContent>
		</Card>
		</Container>
	);
};









export default AddTodoForm