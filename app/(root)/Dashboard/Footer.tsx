"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 100 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="flex flex-center text-center align-middle"
          >
            Made with ❤️ by NeuralKnights at NIT Jamshedpur
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
