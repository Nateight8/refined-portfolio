import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { MyGlobalContext } from "../GlobalContext";
// type Props = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export default function TabPanel(Props: TabPanelProps) {
  const { children, index, value, ...other } = Props;

  return (
    <Box sx={{ minHeight: "90vh" }} hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}
