import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import App from "./App";

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
