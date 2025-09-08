import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../ts/store";

export default function Header() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login"); // /login 페이지로 이동
  };
  const { logout } = useAuthStore();
  const handleLogoutClick = () => {
    sessionStorage.setItem("jwt", "");
    logout();
  };
  const handleCategory = (categoryId: string) => {
    navigate(`/board/category/${categoryId}`);
  };
  const { isAuthenticated } = useAuthStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            냥냥
          </Typography>
          <Button
            color="inherit"
            onClick={() => handleCategory("CAT_SHOWCASE")}
          >
            고양이 자랑
          </Button>
          <Button color="inherit" onClick={() => handleCategory("CAT_HUMOR")}>
            고양이 유머
          </Button>
          <Button color="inherit" onClick={() => handleCategory("INFORMATION")}>
            정보 게시판
          </Button>
          <Button color="inherit" onClick={() => handleCategory("FREE_BOARD")}>
            자유 게시판
          </Button>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={handleLoginClick}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogoutClick}>
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
