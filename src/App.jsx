import { Box } from "@mui/material";
import { HeaderMenu } from "./components/HeaderMenu";
import { MainDashboardPage } from "./pages/MainDashboardPage";

function App() {
  return (
    <div>
      <HeaderMenu />
      <Box mt={12}>
        <MainDashboardPage></MainDashboardPage>
      </Box>
    </div>
  );
}

export default App;
