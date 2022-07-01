import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
import SignUpScreen from "./components/registration/SignUpScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import LoginScreen from "./components/auth/LoginScreen";
import UserScreeen from "./components/user/UserScreen";
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
        <Route path="/users" element={<UserScreeen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
