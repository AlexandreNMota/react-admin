import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="LineChart" subtitle="Simple LineChart"></Header>
      <Box height="75vh">
        <LineChart></LineChart>
      </Box>
    </Box>
  );
};
export default Line;
