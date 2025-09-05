import { Button, Snackbar, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Member } from "../ts/type";
import { useState } from "react";
import { useAuthStore } from "../ts/store";
import { getAuthToken } from "../api/memberApi";

export default function LoginPage() {
  const navigate = useNavigate();
  const [member, setMember] = useState<Member>({
    email: "",
    password: "",
  });

  const [toastOpen, setToastOpen] = useState(false);
  const { login } = useAuthStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!member.email.includes("@")) {
      alert("올바른 이메일 주소를 입력해주세요.");
      return;
    }
    getAuthToken(member)
      .then((token) => {
        if (token != null) {
          sessionStorage.setItem("jwt", token);
          login();
          navigate("/");
          setToastOpen(true);
        }
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };

  return (
    <>
      <Stack spacing={2} mt={2} alignItems="center">
        <TextField
          label="이메일"
          name="email"
          onChange={handleChange}
          type="email"
          required
        />
        <TextField
          label="비밀번호"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <Button color="primary" onClick={handleLogin}>
          로그인
        </Button>
        <Button
          color="primary"
          onClick={() => {
            navigate("/signUp");
          }}
        >
          회원가입
        </Button>
        <Snackbar
          open={toastOpen}
          autoHideDuration={3000}
          onClose={() => setToastOpen(false)}
          message="로그인에 성공했습니다."
        />
      </Stack>
    </>
  );
}
