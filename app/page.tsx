"use client";
import { SignUp } from "@/components/SignUp";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      {JSON.stringify(session)}
      <SignUp />
    </div>
  );
}
