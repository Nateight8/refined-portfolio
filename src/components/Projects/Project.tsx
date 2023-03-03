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
  item: { src: string; git: string };
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
      <Grid item xs={12} md={7} mb={2} sx={{ padding: "0.5rem" }}>
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
              // border: "1px solid RGBA(255, 255, 255, 0.2)",
            }}
          >
            <CardMedia
              component="img"
              image={item.src}
              alt="Paella dish"
              sx={{ objectFit: "cover", height: "15rem" }}
            />
            {/* <CardContent>
              <Typography variant="h6">Connect Stores</Typography>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                This web application was built with React, Redux. Implemented
                server-side rendering(NextJs) and optimized images to improve
                the loading speed of the homepage.
              </Typography>
            </CardContent> */}
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} sx={{ padding: "0.5rem" }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            background: "",
            height: "100%",
            padding: { xs: 0, md: "1rem" },
          }}
        >
          <div className="git" style={{ transform: "translateX(300%)" }}>
            <Button
              href={item.git}
              target="_blank"
              variant="text"
              startIcon={<GitHubIcon />}
            >
              Github Repo
            </Button>
          </div>
          <div className="web" style={{ transform: "translateX(300%)" }}>
            <Button
              variant="text"
              target="_blank"
              href={item.web}
              startIcon={<WebIcon />}
            >
              Visit website
            </Button>
          </div>
        </Stack>
      </Grid>
    </>
  );
}

export default Project;
