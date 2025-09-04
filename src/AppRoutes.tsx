import { Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage";
import LoginPage from "./Page/LoginPage";
import SignupPage from "./Page/SignupPage";
import AdminPage from "./Page/AdminPage";
import CategoryPage from "./Page/CategoryPage";
import BoardDetailPage from "./Page/BoardDetailPage";
import BoardWritePage from "./Page/BoardWritePage";
// import Layout from "./Layout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route element={<Layout />}> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/board/:id" element={<BoardDetailPage />} />
      <Route path="/board/write" element={<BoardWritePage />} />
      {/* </Route> */}
    </Routes>
  );
}
