import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CalenderImg from "../../assets/Calender.svg";

export default function Calender() {
  return (
    <Container
      id="Product"
      component="section"
      sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ display: "flex", alignItems: "center", paddingBlock: 6.5 }}
      >
        {/* Left (Imge)  */}
        <Box sx={{ flex: 1, display: "flex" }}>
          <img src={CalenderImg} alt="Calender" className="size-auto" />
        </Box>

        {/* Right (Text) */}
        <Stack spacing={4} sx={{ flex: 1.5 }}>
          <Stack spacing={2}>
            <Typography variant="h2" className="text-Neutral-D_Grey">
              How to design your site footer like we did
            </Typography>

            <Typography variant="body1" className="text-Neutral-Grey">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius
              arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
              Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna
              tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
              hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </Typography>
          </Stack>

          <Button variant="contained" color="primary" className="w-fit">
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
