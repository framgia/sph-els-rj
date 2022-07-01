<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Routes, BrowserRouter, Route } from "react-router-dom";

import SignUpScreen from "./components/registration/SignUpScreen";
=======
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import SignUpScreen from './components/registration/SignUpScreen';
>>>>>>> f6190d0 (fix-file-structure(2nd commit))
=======
import { Routes, BrowserRouter, Route, useNavigate } from 'react-router-dom'
import SignUpScreen from './components/registration/SignUpScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import LoginScreen from './components/auth/LoginScreen';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

>>>>>>> 5f53c1e (fix/csrf-cookie-errors)
=======
import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
import SignUpScreen from "./components/registration/SignUpScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import LoginScreen from "./components/auth/LoginScreen";
import UserScreeen from "./components/user/UserScreen";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CategoryScreen from "./components/categories/CategoryScreen";
>>>>>>> 7295a2a (feature/create-category-markup)

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/register" element={<SignUpScreen />} />
      </Routes>
=======
=======

    <BrowserRouter> 
>>>>>>> 5f53c1e (fix/csrf-cookie-errors)
    <Routes>
      <Route path='/' exact element={  <DashboardScreen />  } />
      <Route path='/register' element={ <SignUpScreen />}/>
      <Route path='/login' element={ <LoginScreen />}/> 
    </Routes>
>>>>>>> f6190d0 (fix-file-structure(2nd commit))
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashboardScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/lessons" element={<CategoryScreen />} />
        <Route path="/users" element={<UserScreeen />} />
      </Routes>
>>>>>>> 7295a2a (feature/create-category-markup)
    </BrowserRouter>
  );
}

export default App;
