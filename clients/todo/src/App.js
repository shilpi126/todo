import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
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
        
      <Route path="/" element={
        <ProtectedRoute>
            <HomePage/>
      </ProtectedRoute>
      }
      />

      <Route path="/signup" element={
      <PublicRoute>
        <Signup/>
      </PublicRoute>
      }
      />

      <Route path="/login" element={
      <PublicRoute>
        <Signin/>
      </PublicRoute>}
      />

      <Route path='/add-task' element={<AddTodoForm/>}/>
      
      </Routes>
    </BrowserRouter>
  
   
  
  );
}

export default App;
