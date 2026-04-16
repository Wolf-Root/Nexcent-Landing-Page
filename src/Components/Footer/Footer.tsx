import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Logo from "../../assets/Icon.svg";
import Instagram from "../../assets/instagram.svg";
import Dribbble from "../../assets/dribbble.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";
import Send from "../../assets/send.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialIcon: string[] = [Instagram, Dribbble, Twitter, Youtube];
  const Links: { title: string; links: string[] }[] = [
    { title: "Company", links: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"] },
    { title: "Support", links: ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"] },
  ];

  return (
    <Box className="bg-Neutral-Black">
      <Container className="py-8 sm:py-10 md:py-16">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={{ xs: 2.5, sm: 5 }}>
              <Stack spacing={1} direction={"row"}>
                <img src={Logo} alt="logo" />
                <Typography variant="h4" component="span" className="font-bold text-white">
                  Nexcent
                </Typography>
              </Stack>

              <Typography variant="body2" className="text-Neutral-Silver">
                Copyright © {year} Nexcent ltd. <br />
                All rights reserved
              </Typography>

              <Stack spacing={2} direction={"row"}>
                {socialIcon.map((icon, id) => (
                  <img key={id} src={icon} alt="social Icon" className="duration-300 hover:brightness-50" />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }} spacing={3.5} className="flex flex-col-reverse md:flex-row gap-5">
            <Grid size={12} className="flex">
              {Links.map(({ title, links }) => (
                <Grid key={title} size={12}>
                  <Stack spacing={3} direction="column">
                    <Typography variant="h4" className="text-white">
                      {title}
                    </Typography>

                    <List>
                      {links.map((link) => (
                        <ListItem key={link} className="text-Neutral-Silver">
                          {link}
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Grid size={12}>
              <Stack spacing={3}>
                <Typography variant="h4" className="text-white">
                  Stay up to date
                </Typography>

                <div className="flex items-center bg-white/20 py-4 px-3 rounded-lg">
                  <input
                    type="email"
                    placeholder="Stay up to date"
                    className="w-full border-none outline-none text-white text-xl placeholder:text-white"
                  />

                  <img src={Send} alt="Send Email" />
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
