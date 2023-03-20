import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "REGISTRAR ID" },
    {
      field: "name",
      headerName: "NOME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "age",
      headerName: "IDADE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "TELEFONE", flex: 1 },
    { field: "address", headerName: "ENDEREÇO", flex: 1 },
    { field: "city", headerName: "CIDADE", flex: 1 },
    { field: "zipCode", headerName: "CEP", flex: 1 },
  ];
  return (
    <Box>
      <Header title="CONTACTS" subtitle="Managing your contacts"></Header>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
};
export default Contacts;
