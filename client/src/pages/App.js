import { Routes, BrowserRouter, Route } from "react-router-dom";

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
