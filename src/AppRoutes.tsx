import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminPage from "./pages/AdminPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import BoardList from "./pages/BoardList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/boardlist" element={<BoardList />} />
      <Route path="/board/:id" element={<BoardDetailPage />} />
    </Routes>
  );
}
