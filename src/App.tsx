import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";

import Header from "./Components/Header/Header";
import Hero from "./Components/Sections/Hero";
import Clients from "./Components/Sections/Clients";
import Community from "./Components/Sections/Community";
import Unlock from "./Components/Sections/Unlock";
import Achievements from "./Components/Sections/Achievements";
import Calender from "./Components/Sections/Calender";
import Customers from "./Components/Sections/Customers";
import CommunityUpdates from "./Components/Sections/CommunityUpdates";
import Demo from "./Components/Sections/Demo";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />

      <Stack component="main" spacing={5} direction="column" sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Hero />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <CommunityUpdates />
        <Demo />
      </Stack>

      <Footer />
    </>
  );
}
