import type { AxiosRequestConfig } from "axios";
import type { Board, BoardList } from "../type";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
export const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem("jwt");
  return {
    headers: {
      Authorization: token,
    },
  };
};
export const getBoardList = (): BoardList[] => [
  {
    id: 1,
    nickname: "홍길동",
    title: "첫 번째 게시글",
    regTime: "2025-09-04T11:00:00Z",
  },
  {
    id: 2,
    nickname: "홍길동",
    title: "첫 번째 게시글",
    regTime: "2025-09-04T11:00:00Z",
  },
  {
    id: 3,
    nickname: "홍길동",
    title: "첫 번째 게시글",
    regTime: "2025-09-04T11:00:00Z",
  },
];

// 게시글 추가
export const addBoard = async (
  board: Board,
  files: File[]
): Promise<number> => {
  const formData = new FormData();

  // BoardFormDto 필드 채우기
  formData.append("title", board.title);
  formData.append("content", board.content);
  formData.append("category", board.category); // enum 문자열로 넘어감

  // 이미지 3개까지 추가
  files.forEach((file) => {
    formData.append("boardImgFile", file);
  });

  const response = await axios.post(`${BASE_URL}/board/new`, formData, {
    ...getAxiosConfig(),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);
  return response.data; // boardId
};
