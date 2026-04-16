import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Rafiki from "../../assets/rafiki.svg";

export default function Unlock() {
  return (
    <Container
      id="Feature"
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
          <img src={Rafiki} alt="Illustration" className="size-auto" />
        </Box>

        {/* Right (Text) */}
        <Stack spacing={4} sx={{ flex: 1.5 }}>
          <Stack spacing={2}>
            <Typography variant="h2" className="text-Neutral-D_Grey">
              The unseen of spending three years at Pixelgrade
            </Typography>

            <Typography variant="body1" className="text-Neutral-Grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est
              varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar
              sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar
              odio.
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
