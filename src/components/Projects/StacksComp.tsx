import React, { useLayoutEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import StackComp from "./StackComp";
const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);
type Props = {};

function StacksComp({}: Props) {
  const logos = [
    {
      src: "/logos/adobe-xd-2.svg",
      tip: "Adobe XD",
    },
    {
      src: "/logos/figma-1.svg",
      tip: "Figma",
    },
    {
      src: "/logos/html-1.svg",
      tip: "HTML 5",
    },
    {
      src: "/logos/react-2.svg",
      tip: "React Js",
    },
    {
      src: "/logos/nextjs-2.svg",
      tip: "Next Js",
    },
    {
      src: "/logos/tailwind-css-2.svg",
      tip: "Tailwind CSS",
    },
    {
      src: "/logos/material-ui-1.svg",
      tip: "Material UI",
    },
    {
      src: "/logos/redux.svg",
      tip: "Redux",
    },
    {
      src: "/logos/framer-motion.svg",
      tip: "Framer Motion ",
    },
  ];

  // const stacksRef: RefObject<HTMLDivElement> = useRef(null);

  // useLayoutEffect(() => {
  //   let stacks = gsap.utils.toArray(".stack");
  //   stacks.forEach((stack) => {
  //     gsap.timeline().to(stack, 2, { opacity: 1 });
  //   });
  // }, []);

  return (
    <Grid container sx={{ paddingY: "1rem", width: "100%" }}>
      {logos.map((logo) => (
        <StackComp key={logo.tip} logo={logo} />
      ))}
    </Grid>
  );
}

export default StacksComp;
