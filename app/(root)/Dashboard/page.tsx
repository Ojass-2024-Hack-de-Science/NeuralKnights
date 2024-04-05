"use client";
import tick from "@/assets/tick.jpg";
import cross from "@/assets/cross.jpg";
import Image from "next/image";
import Navbar from "../dashboard/Navbar";
import { useState } from "react";
import NetworkCheck from "../dashboard/NetworkCheck";
import LinkInput from "../dashboard/LinkInput";
import Hero from "../dashboard/Hero";
import About from "../dashboard/About";
// import Hero from "./Hero";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <div style={{ backgroundColor: "#002c46", backgroundAttachment: "fixed" }}>
      {/* the navbar */}
      <Navbar />

      {/* the main pg */}
      <Hero />
      {/* user input from link */}
      <LinkInput />
      {/* the tick and its text,  */}
      <NetworkCheck />

      <About />
    </div>
  );
}

//
