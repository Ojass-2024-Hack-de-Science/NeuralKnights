
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Made with ❤️ at NIT Jamshedput by Neural Knights
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
