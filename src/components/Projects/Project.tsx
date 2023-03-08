import React, { useLayoutEffect, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Stack,
  Paper,
  Button,
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
      <Grid item xs={12} sx={{ padding: "0.5rem", paddingBottom: "1rem" }}>
        <Paper
          className="card"
          sx={{
            borderRadius: "1rem",
            background: "#2d2d34",
            userSelect: "none",
          }}
        >
          <Card
            sx={{
              background: "#2d2d34",
            }}
          >
            <CardMedia
              component="img"
              image={item.src}
              alt="Paella dish"
              sx={{ objectFit: "cover", height: "15rem" }}
            />
          </Card>
        </Paper>
        <Box>
          <Button
            href={item.git}
            target="_blank"
            variant="text"
            startIcon={<GitHubIcon />}
          >
            Github Repo
          </Button>
          <Button
            variant="text"
            target="_blank"
            href={item.web}
            startIcon={<WebIcon />}
          >
            Visit website
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default Project;
