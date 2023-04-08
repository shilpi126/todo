
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('http://localhost:5000/api/v1/task/gettodos');
		if (resp.ok) {
			const todos = await resp.json();
			// console.log(todos);
			return { todos };
		}
	}
);


export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		console.log(payload)
		const resp = await fetch('http://localhost:5000/api/v1/task/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
	
			body: 	JSON.stringify({
				text: payload
			})
		});
          console.log(resp);
		 
		 
	
          
		if (resp.ok) {
			const todo = await resp.json();
			console.log(todo);
			return { todo };
			
		}
	}
);



export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
     console.log(payload)

		const resp = await fetch(`http://localhost:5000/api/v1/task/update/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({text: payload.message}),
		});

		console.log(resp );

		if (resp.ok) {
			const todo = await resp.json();
			console.log(todo);
			return { todo };
		}
	}
);


export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {

	
		
		const resp = await fetch(`http://localhost:5000/api/v1/task/delete/${payload}`, {
			method: 'DELETE',
		});
	    if (resp.ok) {
			return {  payload };
		}
	}
);





const todoSlice = createSlice({
	name: 'todos',

	initialState:[],




	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},

		[addTodoAsync.fulfilled]: (state, action) => {
			
			state.push(action.payload.todo);
		},

		[toggleCompleteAsync.fulfilled]: (state, action) => {
			
			state.filter((todo) => todo.id !== action.payload.id);
			console.log(action.payload.todo);
			state.push(action.payload.todo.text);
			
         

		},

		[deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
	
	},



})




export default todoSlice.reducer;



