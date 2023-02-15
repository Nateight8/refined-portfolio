import React, { useState, useContext, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Tabs, Box, Tab, Typography } from "@mui/material";
import TabPanel from "./TabPanel";
import { MyGlobalContext } from "../GlobalContext";

type Props = {};

function TabsComp({}: Props) {
  const { setValue, value } = useContext(MyGlobalContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const box = useRef();

  useEffect(() => {
    console.log(box.current.clientHeight);
  }, []);

  return (
    <>
      <Box
        ref={box}
        sx={{
          borderBottom: 1,
          borderColor: "rgba(124,124,125,0.6)",
          marginTop: "1.25rem",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          sx={{
            ".Mui-selected": {
              color: "#bdbdbd",
              fontWeight: 500,
            },
          }}
        >
          <Tab label="Projects" />
          <Tab label="Stacks" />
          <Tab label="Timeline" />
          <Tab label="Resume" />
        </Tabs>
      </Box>
    </>
  );
}

export default TabsComp;
