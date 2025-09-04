import { Container, CssBaseline } from "@mui/material";
// import "./App.css";
import Header from "./Header";
import AppRoutes from "./AppRoutes";
import { Router } from "@mui/icons-material";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <Header />
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
