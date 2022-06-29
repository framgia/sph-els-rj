import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Container, Box} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

const AuthenticationLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AuthenticationLayout;
