import { Stack, TextField } from "@mui/material";
import type { Board } from "../ts/type";

type BoardDialogContentProps = {
  board: Board;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export default function BoardDialogContent({
  board,
  handleChange,
  setBoard,
}: BoardDialogContentProps) {
  return (
    <Stack spacing={2} mt={1}>
      <TextField
        label="카테고리"
        name="category"
        value={board.category}
        onChange={handleChange}
      />
      <TextField
        label="제목"
        name="title"
        value={board.title}
        onChange={handleChange}
      />
      <TextField
        label="내용"
        name="content"
        value={board.content}
        onChange={handleChange}
      />
      {/* 새 이미지 업로드 */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          if (e.target.files) {
            const files = Array.from(e.target.files).slice(0, 5);
            setBoard({ ...board, imgFiles: files });
          }
        }}
      />

      {/* 기존 이미지 미리보기 */}
      {board.imgUrl &&
        board.imgUrl.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`기존 이미지 ${idx + 1}`}
            style={{ maxWidth: "100%", marginTop: 10 }}
          />
        ))}

      {/* 새 업로드한 이미지 미리보기 */}
      {board.imgFiles &&
        board.imgFiles.map((file, idx) => (
          <img
            key={idx}
            src={URL.createObjectURL(file)}
            alt={`새 이미지 ${idx + 1}`}
            style={{ maxWidth: "100%", marginTop: 10 }}
          />
        ))}
    </Stack>
  );
}
