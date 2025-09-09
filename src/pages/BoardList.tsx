import {
  DataGrid,
  type GridCellParams,
  type GridColDef,
} from "@mui/x-data-grid";
import type { BoardList } from "../ts/type";
import { useEffect, useState } from "react";
import AddBoard from "../components/AddBoard";
import { getBoardList } from "../api/boardApi";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateTime } from "../ts/dateFormat";

export default function BoardList() {
  const [data, setData] = useState<BoardList[]>([]);
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "id", headerName: "글번호", width: 150 },
    {
      field: "title",
      headerName: "제목",
      flex: 1,
      renderCell: (params: GridCellParams) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: "8px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/board/${params.row.id}`);
          }}
        >
          {params.value as string}
        </div>
      ),
    },
    { field: "nickname", headerName: "작성자", width: 150 },

    {
      field: "regTime",
      headerName: "작성일",
      width: 150,
      renderCell: (params: GridCellParams) => (
        <div>{formatDateTime(params.value as string)}</div>
      ),
    },

    // 수정 삭제 버튼
    // {
    //   field: "edit",
    //   headerName: " ",
    //   width: 90,
    //   sortable: false,
    //   filterable: false,
    //   disableColumnMenu: true,
    //   renderCell: (params: GridCellParams) => (
    //     <EditBoard boardData={params.row} loadBoardData={loadBoardData} />
    //   ),
    // },
    // {
    //   field: "delete",
    //   headerName: " ",
    //   width: 90,
    //   sortable: false,
    //   filterable: false,
    //   disableColumnMenu: true,
    //   renderCell: (params: GridCellParams) => (
    //     <Tooltip title="Delete">
    //       <IconButton
    //         onClick={(e) => {
    //           e.stopPropagation();
    //           deleteBoardData(params.row.id);
    //         }}
    //       >
    //         <DeleteIcon />
    //       </IconButton>
    //     </Tooltip>
    //   ),
    // },
  ];

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

  useEffect(() => {
    console.log("category:", category);
    loadBoardData();
  }, [category]);

  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick={true}
        showToolbar
      />
      <AddBoard loadBoardData={loadBoardData} category={category || ""} />
    </>
  );
}
