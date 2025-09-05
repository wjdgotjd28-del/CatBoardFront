import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { BoardList } from "../ts/type";
import { useEffect, useState } from "react";
import AddBoard from "../components/AddBoard";
import { getBoardList } from "../api/boardApi";

export default function BoardList() {
  const [data, setData] = useState<BoardList[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "글번호", width: 150 },
    { field: "nickname", headerName: "작성자", width: 200 },
    { field: "title", headerName: "제목", flex: 1 },
    {
      field: "regTime",
      headerName: "작성일",
      width: 200,
    },
  ];

  const loadBoardData = () => {
    setData(getBoardList());
  };

  useEffect(() => {
    loadBoardData();
  }, []);

  return (
    <>
      <AddBoard loadBoardData={loadBoardData} />
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick={true}
        showToolbar
      />
    </>
  );
}
