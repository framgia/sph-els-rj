import React, { useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationLayout from "../../../Layouts/AuthenticationLayout";
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignUpValidations } from "../../../utils/validations/Registration";
import apiClient from "../../../utils/axios";
import { useSelector } from "react-redux";

export default function SignUpScreen() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: yupResolver(SignUpValidations), mode: "onChange" });

  const { enqueueSnackbar } = useSnackbar();

  const registerUser = async (data) => {
    await apiClient
      .get("/csrf-cookie", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async () => {
        await apiClient.post("/register", data).then((res) => {
          if (res.status === 200) {
            enqueueSnackbar(`${res.data.message}`);
            reset();
          } else {
            enqueueSnackbar(JSON.stringify(res.data.message.email), {
              variant: "error",
            });
          }
        });
      });
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <AuthenticationLayout>
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(registerUser)}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { invalid },
              }) => (
                <TextField
                  fullWidth
                  value={value}
                  onChange={(value) => onChange(value)}
                  label="First Name"
                  helperText={
                    errors.firstName && <p>{errors.firstName.message}</p>
                  }
                  error={invalid}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { invalid },
              }) => (
                <TextField
                  fullWidth
                  value={value}
                  onChange={(value) => onChange(value)}
                  label="Last Name"
                  helperText={
                    errors.lastName && <p>{errors.lastName.message}</p>
                  }
                  error={invalid}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { invalid },
              }) => (
                <TextField
                  fullWidth
                  value={value}
                  onChange={(value) => onChange(value)}
                  label="Email Address"
                  helperText={errors.email && <p>{errors.email.message}</p>}
                  error={invalid}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { invalid },
              }) => (
                <TextField
                  fullWidth
                  type="password"
                  value={value}
                  onChange={(value) => onChange(value)}
                  label="Password"
                  helperText={
                    errors.password && <p>{errors.password.message}</p>
                  }
                  error={invalid}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!isDirty || !isValid}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthenticationLayout>
  );
}
