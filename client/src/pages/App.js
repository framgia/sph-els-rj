<<<<<<< HEAD
import { Routes, BrowserRouter, Route } from "react-router-dom";

import SignUpScreen from "./components/registration/SignUpScreen";
=======
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import SignUpScreen from './components/registration/SignUpScreen';
>>>>>>> f6190d0 (fix-file-structure(2nd commit))

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/register" element={<SignUpScreen />} />
      </Routes>
=======
    <Routes>
      <Route path='/register' element={ <SignUpScreen />}/>
      {/* <Route path='/login' element={ <LoginScreen />}/> */}
    </Routes>
>>>>>>> f6190d0 (fix-file-structure(2nd commit))
    </BrowserRouter>
  );
}

export default App;
