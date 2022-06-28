import { Routes, BrowserRouter, Route } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={ <SignUpScreen />}/>
      <Route path='/login' element={ <LoginScreen />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
