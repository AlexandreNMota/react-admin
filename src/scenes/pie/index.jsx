import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PieChart" subtitle="Simple PieChart"></Header>
      <Box height="75vh">
        <PieChart></PieChart>
      </Box>
    </Box>
  );
};
export default Pie;
