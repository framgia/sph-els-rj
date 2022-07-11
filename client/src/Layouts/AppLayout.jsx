import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../pages/components/commons/Navbar";

const theme = createTheme();

const AppLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        <Container
          sx={{
            m: 2,
            p: 2,
          }}
        >
          {children}
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default AppLayout;
