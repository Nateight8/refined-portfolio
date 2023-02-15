import React from "react";
import { Typography, Box, Avatar } from "@mui/material";
import Socials from "./Socials";
import TabsComp from "./TabsComp";
type Props = {};

function NavBar({}: Props) {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        position: "sticky",
        top: "1.25rem",
        background: "#111010",
        // zIndex: 2000,
      }}
    >
      <Box sx={{ paddingBottom: "0.5rem" }}>
        <Avatar alt="Mbaocha Jonathan" src="/static/images/avatar/1.jpg" />
        <Typography variant="h5" sx={{ paddingY: "1rem", opacity: 0.8 }}>
          Mbaocha Jonathan
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "35rem", opacity: 0.5, fontWeight: 300 }}
        >
          I am a Front End Developer with a strong understanding of UI/UX
          Designs and a passion for building beautiful and functional web
          applications
        </Typography>
      </Box>
      <Socials />
      <TabsComp />
    </Box>
  );
}

export default NavBar;
