import { Box } from "@mui/system";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  return (
    <Box ml={"20px"}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignContent={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
      </Box>
      <ProgressCircle></ProgressCircle>
    </Box>
  );
};
export default Dashboard;
