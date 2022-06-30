import { Routes, BrowserRouter, Route } from "react-router-dom";

import SignUpScreen from "./components/registration/SignUpScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUpScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
