import React, { useLayoutEffect, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Stack,
  Paper,
  Button,
  CardActions,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

type Props = {
  item: { src: string; git: string; web: string };
};

function Project({ item }: Props) {
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
    <>
      <Card
        sx={{
          maxWidth: "100%",
          marginBottom: "1rem",
          background: "#2d2d34",
          borderRadius: 0,
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={item.src}
          alt="Paella dish"
        />

        <CardActions disableSpacing sx={{ paddingY: 0 }}>
          <IconButton
            target="_blank"
            href={item.git}
            aria-label="add to favorites"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton target="_blank" href={item.web} aria-label="share">
            <WebIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default Project;
