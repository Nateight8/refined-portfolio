import React from "react";
import { Grid, Box, Typography, IconButton, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

type Props = {};

function Project({}: Props) {
  const cardStyle = {
    position: "relative",
    height: "200px",
    overflow: "hidden",
    "&:hover .card-content": {
      transform: "translateY(0)",
    },
  };

  const cardContentStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    transform: "translateY(100%)",
  };
  return (
    <Grid item xs={12} md={7} sx={{ padding: "0.5rem" }}>
      <Card
        sx={{
          background: "transparent",
          border: "1px solid RGBA(255, 255, 255, 0.2)",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image="/pro/connect.png"
          alt="Paella dish"
          sx={{ objectFit: "cover", height: "15rem" }}
        />
        <CardContent>
          <Typography variant="h6">Connect Stores</Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Project;
