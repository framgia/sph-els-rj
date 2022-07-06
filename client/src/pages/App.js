import { Routes, BrowserRouter, Route, useNavigate } from 'react-router-dom'
import SignUpScreen from './components/registration/SignUpScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import LoginScreen from './components/auth/LoginScreen';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

import SignUpScreen from "./components/registration/SignUpScreen";

function App() {



  return (

    <BrowserRouter> 
    <Routes>
      <Route path='/' exact element={  <DashboardScreen />  } />
      <Route path='/register' element={ <SignUpScreen />}/>
      <Route path='/login' element={ <LoginScreen />}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
