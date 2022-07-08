import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import App from "../src/pages/App";
<<<<<<< HEAD

import { store } from "./store";
import { Provider } from "react-redux";
=======
>>>>>>> 390ba4a (rebasing(1))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
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
  </Provider>
);
