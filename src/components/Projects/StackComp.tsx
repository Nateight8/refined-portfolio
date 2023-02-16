import React from "react";
import { Grid, Paper, Tooltip, Box } from "@mui/material";
import Image from "next/image";

type Props = {
  logo: { src: string; tip: string };
};

function StackComp({ logo }: Props) {
  const { src, tip } = logo;
  return (
    <Grid item xs={4} sm={3} md={2} sx={{ padding: "0.5rem" }}>
      <Tooltip title={tip} arrow followCursor>
        <Paper
          className="stack"
          sx={{
            height: "7rem",
            background: "#2d2d34",
            width: "100%",
            padding: "1rem",
          }}
        >
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Image src={src} alt={tip} fill />
          </Box>
        </Paper>
      </Tooltip>
    </Grid>
  );
}

export default StackComp;
