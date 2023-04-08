import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Container, List, ListItem } from '@mui/material';
import { getTodosAsync } from '../redux/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
	
	
	useEffect(() => {
		dispatch(getTodosAsync())
	},[dispatch])


	return (
		<Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}} >
			
			{todos.map((todo,i) => (
				
					<TodoItem 
					key={i}
					id={todo._id} 
					text={todo.text} 
					completed={todo.completed} 
					/>
			))}
			
		</Container>
	);
};



export default TodoList;