import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

<<<<<<< HEAD
<<<<<<< HEAD
import App from '../src/pages/App'
=======
import App from "./App";
>>>>>>> 3b95f2d ([FEATURE][FE] Admin Sign Up)
=======
import App from "../src/pages/App";
>>>>>>> f6190d0 (fix-file-structure(2nd commit))

import { store } from "./store";
import { Provider } from "react-redux";

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
