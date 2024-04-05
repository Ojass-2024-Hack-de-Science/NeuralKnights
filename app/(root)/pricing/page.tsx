"use client";
import tick from "@/assets/tick.jpg";
import cross from "@/assets/cross.jpg";
import Image from "next/image";
import Navbar from "../dashboard/Navbar";
import { useState } from "react";
import Pricing from "./Pricing";
import About from "../dashboard/About";
// import Hero from "./Hero";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <div style={{ backgroundColor: "#002c46", backgroundAttachment: "fixed" }}>
      <Navbar />
      <Pricing />
      {/* the main pg */}
    </div>
  );
}