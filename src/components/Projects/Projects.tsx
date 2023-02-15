import React from "react";
import Grid from "@mui/material/Grid";
import Project from "./Project";

type Props = {};

function Projects({}: Props) {
  return (
    <Grid container sx={{ paddingY: "1rem" }}>
      <Project />
      <Project />
      <Project />
      <Project />
    </Grid>
  );
}

export default Projects;
