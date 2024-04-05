"use client";
import tick from "../../assets/tick.jpg";
import cross from "../../assets/cross.jpg";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";
import NetworkCheck from "./NetworkCheck";
import LinkInput from "./LinkInput";
import Hero from "./Hero";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <div style={{ backgroundColor: "#002c46" }}>
      {/* the navbar */}
      <Navbar />

      {/* the main pg */}
      <Hero />
      <div style={{ height: "100vh" }}>
        {/* user input from link */}
        <LinkInput />

        {/* the tick and its text,  */}
        <NetworkCheck />
      </div>
    </div>
  );
}

//
