import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Marketing1 from "../../assets/marketing-1.jpg";
import Marketing2 from "../../assets/marketing-2.jpg";
import Marketing3 from "../../assets/marketing-3.jpg";
import Right from "../../assets/Right.svg";

export default function CommunityUpdates() {
  const CommunityUpdatesItems: { img: string; title: string }[] = [
    {
      img: Marketing1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      img: Marketing2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      img: Marketing3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <Container id="FAQ" component="section">
      <Stack spacing={2}>
        <Stack spacing={1} sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography variant="h2" className="text-Neutral-D_Grey">
            Caring is the new marketing
          </Typography>
          <Typography variant="body1" className="text-Neutral-Grey md:w-1/2">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining
            the community, read about how our community are increasing their membership income and lot's more.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 0, sm: 3 }}>
          {CommunityUpdatesItems.map(({ img, title }, id) => (
            <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex", flexDirection: "column" }}>
              <img src={img} alt={`Card ${id + 1} Img`} className="w-full h-auto" />

              <Stack
                direction="column"
                spacing={2}
                className="bg-white flex-1 p-4 w-[90%] mx-auto rounded-2xl drop-shadow-xl items-center justify-between text-center -translate-y-10 md:-translate-y-16"
              >
                <Typography variant="h4" className="text-Neutral-Grey md:w-[90%]">
                  {title}
                </Typography>

                <Typography variant="h4" color="primary" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  Readmore
                  <img src={Right} alt="Right Arrow" />
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
