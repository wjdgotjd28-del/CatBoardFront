import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import type { Board } from "../ts/type";
import { updateBoard } from "../api/boardApi";
import BoardDialogContent from "./BoardDialogContent";

type EditBoardProps = {
  boardData: Board;
  loadBoardData: () => void;
};

export default function EditBoard({
  boardData,
  loadBoardData,
}: EditBoardProps) {
  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState<Board>({
    id: 0,
    title: "",
    content: "",
    regTime: "",
    category: "",
    imgUrl: [],
    imgFiles: [],
  });

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 클릭 이벤트 막기
    setBoard({
      id: boardData.id ?? 0,
      title: boardData.title ?? "",
      content: boardData.content ?? "",
      regTime: boardData.regTime ?? "",
      category: boardData.category ?? "",
      imgUrl: boardData.imgUrl ?? [],
      imgFiles: [],
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    await updateBoard(board);
    loadBoardData();
    setBoard({
      id: 0,
      title: "",
      content: "",
      regTime: "",
      category: "",
      imgUrl: [],
      imgFiles: [],
    });
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setBoard({ ...board, [name]: value });
  };

  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>글 수정</DialogTitle>
        <DialogContent>
          <BoardDialogContent
            board={board}
            handleChange={handleChange}
            setBoard={setBoard}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>저장</Button>
          <Button onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
