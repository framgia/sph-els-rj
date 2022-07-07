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

<<<<<<< HEAD:client/src/pages/components/feature/registration/SignUpScreen.jsx
import AuthenticationLayout from "../../Layouts/AuthenticationLayout";
=======
import AuthenticationLayout from "../../../Layouts/AuthenticationLayout";
>>>>>>> 6478718 (fix/file-structure and fix/csrf-issues):client/src/pages/components/registration/SignUpScreen.jsx

import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

<<<<<<< HEAD
<<<<<<< HEAD:client/src/pages/components/feature/registration/SignUpScreen.jsx
import { SignUpValidations } from "../../../utils/validations/Registration";
import apiClient from "../../../utils/axios";
=======
import {SignUpValidations} from '../../../utils/validations/Registration'
=======
import { SignUpValidations } from "../../../utils/validations/Registration";
>>>>>>> 7a43b0a (feature/word-management(first-commit))
import apiClient from "../../../utils/axios";
import axios from "axios";
>>>>>>> 6478718 (fix/file-structure and fix/csrf-issues):client/src/pages/components/registration/SignUpScreen.jsx

export default function SignUpScreen() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: yupResolver(SignUpValidations), mode: "onChange" });

  const { enqueueSnackbar } = useSnackbar();

  const registerUser = async (data) => {
<<<<<<< HEAD:client/src/pages/components/feature/registration/SignUpScreen.jsx
    apiClient.post("/register", data).then((res) => {
      if (res.status === 200) {
        enqueueSnackbar(`${res.data.message}`);
        reset();
      } else {
        enqueueSnackbar(JSON.stringify(res.data.message.email), {
          variant: "error",
        });
      }
    });
    // });
=======
    // alert(JSON.stringify(data));

    await axios
      .get("http://localhost:8000/sanctum/csrf-cookie", {
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
<<<<<<< HEAD
       });
>>>>>>> 6478718 (fix/file-structure and fix/csrf-issues):client/src/pages/components/registration/SignUpScreen.jsx
=======
      });
>>>>>>> 7a43b0a (feature/word-management(first-commit))
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
