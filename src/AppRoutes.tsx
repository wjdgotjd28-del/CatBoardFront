import { Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage";
import LoginPage from "./Page/LoginPage";
import SignupPage from "./Page/SignupPage";
import AdminPage from "./Page/AdminPage";
import BoardDetailPage from "./Page/BoardDetailPage";
import PageList from "./Page/BoardList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/boardlist" element={<PageList />} />
      <Route path="/board/:id" element={<BoardDetailPage />} />
    </Routes>
  );
}
