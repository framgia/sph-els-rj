import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AuthenticationLayout from "../../../Layouts/AuthenticationLayout";
import apiClient from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/features/user/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";

import { useSnackbar } from "notistack";

import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginScreen = () => {

  const location = useLocation();
  
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const Login = async (e) => {
    e.preventDefault();


    await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(async () => {
      // Login...
      apiClient
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
   
        if (res.status === 200) {
          dispatch(
            login({
              userInfo: res.data,
              token: res.data.access_token,
            })
          );
          enqueueSnackbar("Logged in successfully");

          localStorage.setItem("userInfo", JSON.stringify(res.data));
          localStorage.setItem("logged_in", true);

          navigate(redirect);
        } else if(res.status === 422) {
          enqueueSnackbar("asdasd");
        }
      });
  });

   
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("logged_in");
    if (loggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <AuthenticationLayout>
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <Box component="form" noValidate onSubmit={Login} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to="/register" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthenticationLayout>
  );
};

export default LoginScreen;
