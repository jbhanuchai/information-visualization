import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

function CustomNoRowsOverlay() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
      <Typography variant="body1" color="textSecondary">
        No records to display
      </Typography>
    </Box>
  );
}

function DataTable({ selectedData }) {
  console.log("Data for the table:", selectedData);
  const columnDefinitions = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "creative_type", headerName: "Creative Type", width: 150 },
    { field: "release", headerName: "Release", width: 100 },
    { field: "rating", headerName: "Rating", width: 100 },
  ];
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={
          selectedData.length > 0? selectedData.map((row, index) => ({ id: index + 1, ...row })): []
        }
        columns={columnDefinitions}
        pageSize={10}
        disableSelectionOnClick
        hideFooterPagination
        getRowId={(row) => row.id}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          height: 500,
          overflowY: "auto",
          "& .MuiDataGrid-virtualScroller": {
            overflow: "auto",
          },
        }}
      />
    </Box>
  );
}

export default DataTable;
