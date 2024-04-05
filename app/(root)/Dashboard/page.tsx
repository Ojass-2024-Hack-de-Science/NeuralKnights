"use client";
import { useState } from "react";
import Hero from "./Hero";
import LinkInput from "./LinkInput";
import Navbar from "./Navbar";
import NetworkCheck from "./NetworkCheck";
import About from "./About";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

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
