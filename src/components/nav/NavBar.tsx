import React from "react";
import { Typography, Box, Avatar } from "@mui/material";
import Socials from "./Socials";
import TabsComp from "./TabsComp";
type Props = {};

function NavBar({}: Props) {
  return (
    <Box
      bgcolor="#22232a"
      sx={{
        marginTop: "5rem",
        // background: "secondary",
        position: "sticky",
        top: { xs: "-15rem", sm: "-12.75rem" },
        // bottom: "48px",
        zIndex: 1000,
      }}
    >
      <Box sx={{ paddingBottom: "0.5rem" }}>
        <Avatar
          className="av"
          alt="Mbaocha Jonathan"
          src="/static/images/avatar/1.jpg"
          sx={{ opacity: 0 }}
        />
        <Typography
          className="dev"
          variant="h1"
          sx={{
            paddingY: "1rem",
            opacity: 0,
            fontSize: "1.5rem",
            userSelect: "none",
          }}
        >
          Mbaocha Jonathan
        </Typography>
        <Typography
          className="bio"
          variant="body1"
          sx={{
            maxWidth: "35rem",
            opacity: 0,
            fontWeight: 300,
            userSelect: "none",
          }}
        >
          I am a Frontend Developer with a strong understanding of UI/UX Designs
          and a passion for building beautiful and functional web applications
        </Typography>
      </Box>
      <Socials />
      <TabsComp />
    </Box>
  );
}

export default NavBar;
