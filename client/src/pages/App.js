import { Routes, BrowserRouter, Route, useNavigate } from 'react-router-dom'
import SignUpScreen from './components/feature/registration/SignUpScreen';
import DashboardScreen from './components/feature/dashboard/DashboardScreen';
import LoginScreen from './components/feature/auth/LoginScreen';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';


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
