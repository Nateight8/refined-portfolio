import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

type Props = {};

function Project({}: Props) {
  const [flip, setFlip] = useState(false);
  const handleMouseEnter = () => {
    setFlip(true);
  };

  const handleMouseLeave = () => {
    setFlip(false), 5000;
  };

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ padding: "0.5rem" }} zIndex={-1}>
      <>
        <Box
          sx={{
            background: "#262626",
            height: "15rem",
            borderRadius: "0.5rem",
            zIndex: 50,
            position: "relative",
          }}
        >
          <Image fill src="/pro/connect.png" alt="" />
          {/* <button>Click to flip</button> */}
        </Box>
      </>
    </Grid>
  );
}

export default Project;
