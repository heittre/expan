import { Container } from "@mui/material";
import { MainDasboard } from "../components/MainDashboard";

export const MainDashboardPage = () => {
  return (
    <Container
      style={{ paddingLeft: "16px", paddingRight: "16px" }}
      maxWidth="2xl"
    >
      <MainDasboard />
    </Container>
  );
};
