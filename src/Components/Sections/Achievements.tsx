import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Members from "../../assets/Members.svg";
import Clubs from "../../assets/Club.svg";
import Event from "../../assets/Event.svg";
import Payments from "../../assets/Payments.svg";

export default function Achievements() {
  const AchievementsItems: { img: string; number: string; dis: string }[] = [
    {
      img: Members,
      number: "2,245,341",
      dis: "Members",
    },
    {
      img: Clubs,
      number: "46,328",
      dis: "Clubs",
    },
    {
      img: Event,
      number: "828,867",
      dis: "Event Bookings",
    },
    {
      img: Payments,
      number: "1,926,436",
      dis: "Payments",
    },
  ];

  return (
    <Box component="section" id="Home" className="bg-Neutral-Silver">
      <Container sx={{ paddingBlock: 8 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 5, md: 0 }} sx={{ display: "flex", alignItems: "center" }}>
          {/* Left (Text)  */}
          <Stack spacing={1} sx={{ flex: 1 }}>
            <Typography variant="h2" className="text-Neutral-D_Grey">
              Helping a local <br />
              <span className="text-Primary">business reinvent itself</span>
            </Typography>

            <Typography variant="body1" className="text-Neutral-Grey">
              We reached here with our hard work and dedication
            </Typography>
          </Stack>

          {/* Right Grid Boxs */}
          <Grid container rowSpacing={5} columnSpacing={3.75} sx={{ flex: 1 }}>
            {AchievementsItems.map(({ img, number, dis }, id) => (
              <Grid key={id} size={{ xs: 12, sm: 6 }}>
                <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
                  <img src={img} alt={dis} className="size-12" />

                  <Stack direction="column">
                    <Typography variant="h2" className="text-Neutral-D_Grey">
                      {number}
                    </Typography>

                    <Typography variant="body1" className="text-Neutral-Grey">
                      {dis}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
