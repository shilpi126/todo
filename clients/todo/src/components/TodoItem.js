import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleCompleteAsync } from '../redux/todoSlice';



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, TextField } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';



const TodoItem = ({ id, text }) => {
	const [isUpdate, setIsUpdate] = useState(false)
	
    const textRef = useRef(null)
	const navigate = useNavigate()


    const dispatch = useDispatch();
    
	const handleUpdateClick = (e) => {
		e.preventDefault()
		const result = textRef.current.value;
	
		console.log(result);
	
	    dispatch(toggleCompleteAsync({message: result , id:id}));

	    navigate("/")

	 };

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync(id))
	}



	return (
    
	<Card sx={{ width: 345, height:160,  justifyContent:"space-evenly",mr:"20px", mt:"30px"}}>
	<Typography gutterBottom variant="h5" component="div" textAlign="center" color="text.secondary" >
		TASK
	</Typography>
	<Divider/>


	
	

	{(isUpdate === true) ? 
	(
	<CardContent sx={{display:"flex"}}>
	<form  onSubmit={handleUpdateClick}>
		
        <input
            style={{height:"100%", width:"100%"}}
            type='text'
            placeholder='Edit todo...'
            defaultValue={text}
			ref={textRef}

		
        />
        <Button type='submit' fullWidth  >
            Update Todo
        </Button>
        
    </form> 
	</CardContent >
	)

	:

	(
		<>
		<CardContent sx={{display:"flex"}}>
	<Typography 
		type='text'
		variant="body2" 
		
		>
		{text}
	</Typography>
	

	</CardContent>
		<CardActions >

		<Button size="small" 
		sx={{width:"50%"}}
        onClick={() => setIsUpdate(true)}
		>
			Update
		</Button>

		<Button size="small" 
		sx={{width:"50%"}}
		onClick={handleDeleteClick}>Delete</Button>
		</CardActions>
	
		</>

	)
	
} 



	
	

	</Card>

	);


};





export default TodoItem;




