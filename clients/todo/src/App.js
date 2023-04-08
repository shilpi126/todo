import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import HomePage from "./pages/HomePage"
import Signin from "./pages/Signin";
// import './App.css';
import Signup from "./pages/Signup"
import store from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
 
    <BrowserRouter>
        <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Signin/>}/>
      <Route path='/add-task' element={<AddTodoForm/>}/>
      
      </Routes>
    </BrowserRouter>
  
   
  
  );
}

export default App;
