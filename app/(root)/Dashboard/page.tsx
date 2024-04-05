"use client";
import { useState } from "react";
import Hero from "./Hero";
import LinkInput from "./LinkInput";
import Navbar from "./Navbar";
import NetworkCheck from "./NetworkCheck";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <>
      {/* the navbar */}
      <Navbar />

      {/* the main pg */}
      <Hero />

      {/* user input from link */}
      <LinkInput />

      {/* the tick and its text,  */}
      <NetworkCheck />
    </>
  );
}
