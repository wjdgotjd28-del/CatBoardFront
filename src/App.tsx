import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
// import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static" sx={{ width: "100%" }}>
          <Toolbar>
            <Typography variant="h6">냥냥</Typography>
            <Box
              sx={{ flexGrow: 0.5, display: "flex", justifyContent: "center" }}
            ></Box>
            <TextField
              // value={searchQuery}
              // onChange={handleSearchChange}
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <Routes>
          <Route path="/" element={<PrivateRoute><CarList/></PrivateRoute>} />
          <Route path="/login" element={<Login/>} />
        </Routes> */}
      </Container>
    </>
  );
}

export default App;
