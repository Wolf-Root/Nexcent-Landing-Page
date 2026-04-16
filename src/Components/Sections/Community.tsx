import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Membership from "../../assets/Membership.svg";
import National from "../../assets/National.svg";
import Clubs from "../../assets/Clubs.svg";
import Box from "@mui/material/Box";

export default function Community() {
  const CommunityItems: { img: string; title: string; dis: string }[] = [
    {
      img: Membership,
      title: "Membership Organisations",
      dis: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: National,
      title: "National Associations",
      dis: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: Clubs,
      title: "Clubs And Groups",
      dis: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <Container
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 2 }}
    >
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="h2" className="text-Neutral-D_Grey md:w-2/3 text-center">
          Manage your entire community in a single system
        </Typography>
        <Typography variant="body1" className="text-Neutral-Grey">
          Who is Nextcent suitable for?
        </Typography>
      </Stack>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          gap: 2,
          flexFlow: { xs: "wrap", md: "nowrap" },
        }}
      >
        {CommunityItems.map(({ img, title, dis }, id) => (
          <Stack
            key={id}
            spacing={1}
            sx={{
              paddingBlock: 3,
              paddingInline: 4,
              maxWidth: "300px",
              textAlign: "center",
              justifyContent: "center",
              borderRadius: 1,
              boxShadow: "0 2px 2px 0px var(--color-Neutral-Grey-blue)",
            }}
          >
            <Stack spacing={2} direction="column" sx={{ alignItems: "center" }}>
              <img src={img} alt={title} className="w-16.25 h-auto" />
              <Typography variant="h3" className="text-Neutral-D_Grey text-center">
                {title}
              </Typography>
            </Stack>

            <Typography variant="body1" className="text-Neutral-Grey">
              {dis}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
