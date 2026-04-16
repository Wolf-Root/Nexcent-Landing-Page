import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Tesla from "../../assets/Tesla.svg";
import Logo from "../../assets/Logo.svg";
import Logo1 from "../../assets/Logo-1.svg";
import Logo2 from "../../assets/Logo-2.svg";
import Logo3 from "../../assets/Logo-3.svg";
import Logo4 from "../../assets/Logo-4.svg";
import Logo5 from "../../assets/Logo-5.svg";
import Right from "../../assets/Right.svg";

export default function Customers() {
  const Logos: string[] = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5];

  return (
    <Box id="Testimonial" className="bg-Neutral-Silver">
      <Container component="section" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ display: "flex", alignItems: "center", paddingBlock: 4 }}
        >
          {/* Left (Imge)  */}
          <Box sx={{ flex: 1, display: "flex" }}>
            <img src={Tesla} alt="Tesla" className="size-auto" />
          </Box>

          {/* Right (Text) */}
          <Stack spacing={4} sx={{ flex: 1.5 }}>
            <Stack spacing={2}>
              <Typography variant="body1" className="text-Neutral-Grey">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
                ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie
                arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus
                sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
                efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </Typography>

              <Stack spacing={1}>
                <Typography variant="h4" component="h3" color="primary">
                  Tim Smith
                </Typography>

                <Typography variant="body2" className="text-Neutral-L_Grey">
                  British Dragon Boat Racing Association
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ flexWrap: "wrap", gap: { xs: 2, sm: 4 } }}>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: { xs: 4, sm: 5 } }}>
                {Logos.map((logo, id) => (
                  <img key={id} src={logo} alt={`Customer ${id + 1} Logo`} className="size-12" />
                ))}
              </Stack>

              <Button variant="text" color="primary" className="font-bold! px-0! w-fit gap-2">
                Meet all customers
                <img src={Right} alt="Right Arrow" />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
