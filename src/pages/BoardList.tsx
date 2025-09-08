import {
  DataGrid,
  type GridCellParams,
  type GridColDef,
  type GridRowParams,
} from "@mui/x-data-grid";
import type { BoardList } from "../ts/type";
import { useEffect, useState } from "react";
import AddBoard from "../components/AddBoard";
import { deleteBoard, getBoardList } from "../api/boardApi";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditBoard from "../components/EditBoard";

export default function BoardList() {
  const [data, setData] = useState<BoardList[]>([]);
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [toastVal, setToastVal] = useState({
    open: false,
    msg: "",
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "글번호", width: 150 },
    { field: "nickname", headerName: "작성자", width: 200 },
    { field: "title", headerName: "제목", flex: 1 },
    {
      field: "regTime",
      headerName: "작성일",
      width: 200,
    },
    {
      field: "edit",
      headerName: " ",
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <EditBoard boardData={params.row} loadBoardData={loadBoardData} />
      ),
    },
    {
      field: "delete",
      headerName: " ",
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <Tooltip title="Delete">
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              deleteBoardData(params.row.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const deleteBoardData = (id: number) => {
    if (confirm(`${id}번 데이터를 삭제하시겠습니까?`)) {
      deleteBoard(id)
        .then((res) => {
          loadBoardData();
          setToastVal({ open: true, msg: `${res}번 데이터가 삭제되었습니다.` });
        })
        .catch((err) => console.log(err));
    }
  };

  const loadBoardData = async () => {
    if (!category) return;
    try {
      const boards = await getBoardList(category);
      setData(boards);
      console.log(boards);
    } catch (error) {
      console.error("게시글 불러오기 실패:", error);
    }
  };

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/board/${params.id}`);
  };

  useEffect(() => {
    console.log("category:", category);
    loadBoardData();
  }, [category]);

  return (
    <>
      <AddBoard loadBoardData={loadBoardData} category={category || ""} />
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick={true}
        showToolbar
        onRowClick={handleRowClick} // 클릭시 페이지 이동 => 데이터 띄우기
      />
    </>
  );
}
