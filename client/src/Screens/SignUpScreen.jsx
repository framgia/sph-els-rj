import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import AuthenticationLayout from "../components/Layouts/AuthenticationLayout";
// import axios from "axios";
import apiClient from "../lib/axios";

import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignUpValidations } from "../validations/Registration";

export default function App() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: yupResolver(SignUpValidations), mode: "onChange" });

  const { enqueueSnackbar } = useSnackbar();

  const registerUser = async (data) => {
    // alert(JSON.stringify(data));

    await apiClient.post("/users", data).then((res) => {
      if (res.status === 200) {
        enqueueSnackbar(`${res.data.message}`);
        reset();
      } else {
        enqueueSnackbar(JSON.stringify(res.data.message.email), { variant: 'error' });
      }
    });
  };

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
          {/* <Grid item xs={12}>
            <Controller
              name="confirmPassword"
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
                  label="confirm Password"
                  helperText={
                    errors.confirmPassword && (
                      <p>{errors.confirmPassword.message}</p>
                    )
                  }
                  error={invalid}
                />
              )}
            />
          </Grid> */}
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
