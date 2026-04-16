import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/Logo.svg";
import Logo_1 from "../../assets/Logo-1.svg";
import Logo_2 from "../../assets/Logo-2.svg";
import Logo_3 from "../../assets/Logo-3.svg";
import Logo_4 from "../../assets/Logo-4.svg";
import Logo_5 from "../../assets/Logo-5.svg";
import Logo_6 from "../../assets/Logo-6.svg";

export default function Clients() {
  const clientsLogo: string[] = [Logo, Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6];

  return (
    <Container
      component="section"
      id="Service"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 2 }}
    >
      <Stack spacing={1} sx={{ textAlign: "center" }}>
        <Typography variant="h2" className="text-Neutral-D_Grey">
          Our Clients
        </Typography>
        <Typography variant="body1" className="text-Neutral-Grey">
          We have been working with some Fortune 500+ clients
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          width: "100%",
          paddingBlock: 5,
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          gap: 2,
          flexFlow: "wrap",
        }}
      >
        {clientsLogo.map((logo, id) => (
          <img key={id} src={logo} alt={`Clients ${id} Logo`} className="size-12" />
        ))}
      </Stack>
    </Container>
  );
}
