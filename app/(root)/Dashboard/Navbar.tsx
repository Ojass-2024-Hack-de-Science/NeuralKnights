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
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { GoCommentDiscussion } from "react-icons/go";
import { LogOut } from "lucide-react";
export default function ButtonAppBar() {
  const session = useSession()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link href={"/profile"} className="pr-2">
            <Tooltip title="Open Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={session.data?.user?.image || ''} />
              </IconButton>
            </Tooltip>
         </Link>
            Welcome {session?.data?.user?.name || ''}
          </Typography>

       

        <Link href={"/blog"}><Button color="inherit" className=" flex gap-2">Community Chat<GoCommentDiscussion size={20}/></Button></Link>
          <Button color="inherit" onClick={()=>signOut()} className=" flex gap-1">SignOut<LogOut size={18}/></Button>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
