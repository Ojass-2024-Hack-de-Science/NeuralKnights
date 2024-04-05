"use client"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/lib/next_auth";
import { useSession } from "next-auth/react";

export default function ButtonAppBar() {
  const session = useSession()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome User
          </Typography>

          <Tooltip title="Open Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={session.data?.user?.image} />
            </IconButton>
          </Tooltip>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
