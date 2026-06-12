import Illustration from "../../assets/Illustration.svg";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <Box component="section" id="Home" className="bg-Neutral-Silver w-full">
      <Container className="w-full min-h-dvh flex flex-col justify-center py-5">
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 5, md: 10 }} sx={{ display: "flex" }}>
          {/* Left (Text)  */}
          <Stack spacing={4} sx={{ flex: 1.6 }}>
            <Stack spacing={2}>
              <Typography variant="h1" className="text-Neutral-D_Grey">
                Lessons and insights <br />
                <span className="text-Primary">from 8 years</span>
              </Typography>

              <Typography variant="body1" className="text-Neutral-Grey">
                Where to grow your business as a photographer: site or social media?
              </Typography>
            </Stack>

            <Button variant="contained" color="primary" className="w-fit">
              Register
            </Button>
          </Stack>

          {/* Right (Imge) */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "end" } }}>
            <img src={Illustration} alt="Illustration" className="size-auto" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
