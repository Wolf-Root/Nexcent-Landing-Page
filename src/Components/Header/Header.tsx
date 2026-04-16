import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import Logo from "../../assets/Icon.svg";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

const navLinks = [
  { title: "Home", path: "#" },
  { title: "Service", path: "#Service" },
  { title: "Feature", path: "#Feature" },
  { title: "Product", path: "#Product" },
  { title: "Testimonial", path: "#Testimonial" },
  { title: "FAQ", path: "#FAQ" },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Header(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [linkActiv, setlinkActiv] = useState("Home");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className="bg-Neutral-Silver!" elevation={0}>
          <Container>
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* 1. Logo */}
              <Stack spacing={1} direction={"row"}>
                <img src={Logo} alt="logo" />
                <Typography variant="h4" component="span" className="font-bold text-Secondary">
                  Nexcent
                </Typography>
              </Stack>

              {/* 2. Middle Links (Desktop Only) */}
              <List sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
                {navLinks.map(({ path, title }) => (
                  <ListItem key={title} disableGutters disablePadding>
                    <Typography
                      component="a"
                      href={path}
                      className={`font-semibold duration-300 ${linkActiv === title ? "text-Primary hover:text-gray-900" : "text-gray-900 hover:text-Primary"}`}
                      onClick={() => setlinkActiv(title)}
                    >
                      {title}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              {/* 3. Right Side Buttons (Desktop) + Menu Icon (Mobile) */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                  <Button variant="text" sx={{ padding: "10px 20px" }}>
                    Login
                  </Button>
                  <Button variant="contained" sx={{ padding: "10px 20px" }}>
                    Sign up
                  </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { md: "none" } }}>
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navLinks.map(({ path, title }) => (
              <ListItem
                key={title}
                onClick={() => {
                  handleDrawerToggle();
                  setlinkActiv(title);
                }}
                component="a"
                href={path}
              >
                <ListItemText
                  primary={title}
                  className={`font-semibold duration-300 ${linkActiv === title ? "text-Primary hover:text-gray-900" : "text-gray-900 hover:text-Primary"}`}
                />
              </ListItem>
            ))}
            <ListItem sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button variant="text" sx={{ padding: "10px 20px" }} fullWidth>
                Login
              </Button>
              <Button variant="contained" sx={{ padding: "10px 20px" }} fullWidth>
                Sign up
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Toolbar />
    </>
  );
}
