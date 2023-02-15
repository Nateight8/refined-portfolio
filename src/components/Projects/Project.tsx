import React from "react";
import { Grid, Box } from "@mui/material";

type Props = {};

function Project({}: Props) {
  return (
    <Grid item xs={4} sx={{ padding: "0.5rem" }}>
      <Box
        sx={{ background: "#262626", height: "15rem", borderRadius: "0.5rem" }}
      ></Box>
    </Grid>
  );
}

export default Project;
