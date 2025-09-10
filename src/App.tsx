import { CssBaseline, Box, Container } from "@mui/material";
import Header from "./layouts/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* 본문 */}
      <Container maxWidth="xl">
        <AppRoutes />
      </Container>

      {/* <Box display="flex" flexDirection="column" minHeight="100vh"></Box> */}
    </>
  );
}

export default App;
