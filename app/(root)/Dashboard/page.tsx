"use client";
import { useState } from "react";
import Hero from "./Hero";
import LinkInput from "./LinkInput";
import Navbar from "./Navbar";
import NetworkCheck from "./NetworkCheck";
import About from "./About";
import { loadingState } from "@/lib/atom";
import { useRecoilValue } from "recoil";
import TypingAnimation from "@/app/loader/loader";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const loading =  useRecoilValue(loadingState);
  const safeHandler = () => {
    setSafe(!safe);
  };

  if(loading){
    return <TypingAnimation />
  }
  return (
    <div style={{ backgroundColor: "#002c46", backgroundAttachment: "fixed" }}>
      <Navbar />
      <Hero />
      <NetworkCheck />
      <About />
    </div>
  );
}

//
