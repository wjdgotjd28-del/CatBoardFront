import type { AxiosRequestConfig } from "axios";
import type { Board, BoardList } from "../ts/type";
import axios from "axios";
export const BASE_URL = import.meta.env.VITE_API_URL;
export const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem("jwt");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

export const getBoardList = async (category: string): Promise<BoardList[]> => {
  const response = await axios.get(
    `${BASE_URL}/board/category/${category}`, // category를 URL에 동적으로 넣음
    getAxiosConfig()
  );
  return response.data;
};

export const getBoard = async (boardId: number): Promise<Board> => {
  const response = await axios.get(
    `${BASE_URL}/board/${boardId}`,
    getAxiosConfig()
  );
  return response.data;
};

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
      ...getAxiosConfig().headers, // Authorization 유지
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);
  return response.data; // boardId
};

export const updateBoard = async (board: Board): Promise<Board> => {
  const response = await axios.put(
    `${BASE_URL}/board${board.id}`,
    board,
    getAxiosConfig()
  );
  return response.data;
};

export const deleteBoard = async (boardId: number): Promise<number> => {
  const response = await axios.delete(
    `${BASE_URL}/board/${boardId}`,
    getAxiosConfig()
  );
  return response.data;
};
