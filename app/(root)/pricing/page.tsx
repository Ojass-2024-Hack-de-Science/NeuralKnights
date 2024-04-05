"use client";
import Navbar from "../dashboard/Navbar";
import { useState } from "react";
import Pricing from "./Pricing";
// import Hero from "./Hero";

export default function Page() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <>
      <div style={{ backgroundColor: "#b3ecff" }}>
        <Navbar />
        <Pricing />
      </div>
      {/* <Test /> */}
    </>
  );
}
