import Card from "@/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NEXT_AUTH } from "@/lib/next_auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const page = async () => {
  const { user } = await getServerSession(NEXT_AUTH);
  return (
    <main className="flex h-[100vh] w-[100vw] flex-col p-28  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-blue-200 to-blue-400">
      <div className=" flex ">
        <div className=" flex gap-4 flex-col justify-center items-center">
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </div>
        <div className=" flex flex-col justify-center px-14 gap-2  text-center">
          <div className=" font-semibold text-xl">Name: {user.name}</div>
          <Dialog>
  <DialogTrigger>
          <Button variant={"secondary"} size={"lg"}>
            Change Password
          </Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        </div>
      </div>
        <div className=" p-10 flex justify-center items-center flex-col">
          <div className=" font-bold text-xl p-5">History</div>
          <Card/>
        </div>
    </main>
  );
};

export default page;
