import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

<<<<<<< HEAD
import App from '../src/pages/App'
=======
import App from "./App";
>>>>>>> 3b95f2d ([FEATURE][FE] Admin Sign Up)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    maxSnack={3}
    preventDuplicate
    variant="info"
    autoHideDuration={2000}
  >
    <App />
  </SnackbarProvider>
);
