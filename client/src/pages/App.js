import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
import SignUpScreen from "./components/registration/SignUpScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import LoginScreen from "./components/auth/LoginScreen";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {



  return (
<<<<<<< HEAD
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" exact element={<DashboardScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
=======
=======

    <BrowserRouter> 
>>>>>>> 65d1344 (rebasing(3))
    <Routes>
      <Route path='/' exact element={  <DashboardScreen />  } />
      <Route path='/register' element={ <SignUpScreen />}/>
      <Route path='/login' element={ <LoginScreen />}/> 
    </Routes>
>>>>>>> 3b8d475 (rebasing(2))
    </BrowserRouter>
  );
}

export default App;
