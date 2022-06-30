import React, { useEffect } from "react";
import { logout } from "../../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../../Layouts/AppLayout";
const DashboardScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppLayout>
      <button onClick={() => logoutHandler()}>LOGOUT</button>
    </AppLayout>
  );
};

export default DashboardScreen;
