"use client";
import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";

export default function NetworkCheck() {
  const [safe, setSafe] = useState(true);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <>
      {/* the tick and its text,  */}
      {safe ? (
        <>
          {/* safe */}
          <div className="flex justify-center p-3">
            <Image src={tick} alt="safe" className="w-[20%]" />
            <h2
              className="flex flex-col justify-center text-3xl "
              style={{
                color: "#70F3C6",
              }}
            >
              {"   "}
              The Network is safe and protected
            </h2>
          </div>
        </>
      ) : (
        // not safe
        <div className="flex justify-center p-3">
          <Image src={cross} alt="safe" className="w-[15%]" />
          <h2
            className="flex flex-col justify-center text-3xl "
            style={{
              color: "#ee6b6e",
            }}
          >
            The Network is NOT safe and protected
          </h2>
        </div>
      )}
    </>
  );
}
