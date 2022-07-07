import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import SignUpScreen from "./components/registration/SignUpScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import LoginScreen from "./components/auth/LoginScreen";
=======
import SignUpScreen from "./components/feature/registration/SignUpScreen";
import DashboardScreen from "./components/feature/dashboard/DashboardScreen";
import LoginScreen from "./components/feature/auth/LoginScreen";
>>>>>>> 9f13142 (rebasing(3))
=======
import SignUpScreen from "./components/registration/SignUpScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import LoginScreen from "./components/auth/LoginScreen";
>>>>>>> 8a85ea2 (rebasing(4))
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CategoryScreen from "./components/categories/CategoryScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DashboardScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/lessons" element={<CategoryScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
