import { Box } from "@mui/system";
import Header from "../../components/Header";

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
    </Box>
  );
};
export default Dashboard;
