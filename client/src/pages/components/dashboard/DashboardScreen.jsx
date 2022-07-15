import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userActions";
import AppLayout from "../../../Layouts/AppLayout";

const DashboardScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppLayout>
      <h1>{userInfo.data.first_name + userInfo.data.last_name}</h1>
      <button onClick={() => logoutHandler()}>LOGOUT</button>
    </AppLayout>
  );
};

export default DashboardScreen;
