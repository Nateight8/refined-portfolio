import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";

type Props = {};

function Socials({}: Props) {
  return (
    <Stack
      className="socials"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { md: "center" },
        opacity: 0,
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Tooltip title="currently in" arrow>
          <Button variant="text" startIcon={<PersonPinIcon />}>
            Lagos, Nigeria
          </Button>
        </Tooltip>
        <Tooltip title="Joined tech" arrow>
          <Button variant="text" startIcon={<CalendarMonthIcon />}>
            April, 2020
          </Button>
        </Tooltip>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <IconButton aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="twitter">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="twitter">
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Stack>
  );
}

export default Socials;
