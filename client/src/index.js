import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

<<<<<<< HEAD
import App from '../src/pages/App'
=======
import App from "../src/pages/App";
>>>>>>> f6190d0 (fix-file-structure(2nd commit))

import { store } from "./store";
import { Provider } from "react-redux";
import { swrConfig } from "./utils/swr";
import { SWRConfig } from "swr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SWRConfig value={swrConfig}>
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
    </SWRConfig>
  </Provider>
);
