import React, { useRef } from "react";
import { Grid, Box, Typography, IconButton, Stack } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

type Props = {};

function Card({}: Props) {
  const onEnter = () => {};

  return (
    <Grid item xs={4} sx={{ padding: "0.5rem" }}>
      <Stack
        justifyContent="end"
        sx={{
          width: "100%",
          height: "15rem",
          overflow: "hidden",
          position: "relative",
          backgroundImage: "url(/pro/connect.png)",
          backgroundSize: "cover",
          borderRadius: "0.5REM",
        }}
      >
        <Box
          sx={{
            background: "Red",
            padding: "1rem",
            transform: "translateY(95%)",
            transition: "0.2s ease-out",
            height: "100%",
            "&:hover": {
              cursor: "pointer",
              transform: "translateY(0%)",
              // transitionDuration: "2s",
              transition: "0.2s ease-in",
            },
          }}
        >
          <Typography variant="body1">Lizards are a widespread</Typography>
        </Box>
      </Stack>
    </Grid>
  );
}

export default Card;
