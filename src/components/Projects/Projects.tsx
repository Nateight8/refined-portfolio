import React, { useLayoutEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Project from "./Project";

const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);
type Props = {};

function Projects({}: Props) {
  useLayoutEffect(() => {
    let pannels = gsap.utils.toArray(".project-pannel");

    pannels.forEach((pannel: any, idx: number) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pannel,
          start: "top 50%",
          // markers: true,
        },
      });

      tl.to(pannel, 1, { opacity: 1, y: "-4rem" });

      let gitTl = gsap.timeline({
        scrollTrigger: {
          trigger: pannel,
          start: "top 35%",
          // markers: true,
        },
      });
      gitTl.to(pannel.querySelector(".git"), 1, { xPercent: -300 });

      let webTl = gsap.timeline({
        scrollTrigger: {
          trigger: pannel,
          start: "top 35%",
          // markers: true,
        },
      });
      webTl.to(pannel.querySelector(".web"), 2.5, {
        xPercent: -300,
        // duration: 2.5,
        ease: "back.out(1.1)",
      });
    });
  }, []);

  return (
    <Box sx={{ paddingY: "5rem", overflowX: "hidden" }}>
      {[1, 2, 3].map((item) => (
        <Grid
          container
          key={item}
          className="project-pannel"
          sx={{ opacity: 0 }}
        >
          <Project />
        </Grid>
      ))}
    </Box>
  );
}

export default Projects;
