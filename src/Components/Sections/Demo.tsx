import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import WhiteRight from "../../assets/WhiteRight.svg";

export default function Demo() {
  return (
    <Box className="bg-Neutral-Silver">
      <Container sx={{ padding: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stack spacing={2} className="w-full md:w-2/3 items-center text-center">
          <Typography variant="h1" component="h2" className="text-Neutral-Black">
            Pellentesque suscipit fringilla libero eu.
          </Typography>

          <Button variant="contained" className="flex items-center justify-center gap-2">
            Get a Demo
            <img src={WhiteRight} alt="Right Arrow" />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
