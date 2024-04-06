"use client";
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
import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/lib/next_auth";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import { VscCommentDiscussion } from "react-icons/vsc";
import Link from "next/link"
export default function ButtonAppBar() {
  const session = useSession();
  return (
    <Box sx={{ flexGrow: 1, zIndex: "2" }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr:  0}}
          >
            {/* <MenuIcon /> */}
            <Sidebar />
            <Tooltip title="Open Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={session.data?.user?.image || ""} />
            </IconButton>
          </Tooltip>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome User
          </Typography>



          <Link href={"/blog"}><Button color="inherit" className="gap-1" >Community Chat<VscCommentDiscussion size={20}/></Button></Link>
          <Button color="inherit" className="gap-1" onClick={()=>signOut({callbackUrl:"/"})}>SignOut<LogOut size={18}/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}