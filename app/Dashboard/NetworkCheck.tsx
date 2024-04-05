"use client";
import tick from "../../assets/tick.jpg";
import cross from "../../assets/cross.jpg";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";

export default function NetworkCheck() {
  const [safe, setSafe] = useState(false);
  const safeHandler = () => {
    setSafe(!safe);
  };

  return (
    <>
      {/* the tick and its text,  */}
      {safe ? (
        <>
          <div className="flex justify-center p-3">
            <Image src={tick} alt="safe" className="w-[20%]" />
            <h2 className="flex flex-col justify-center">
              {" "}
              The Network is safe and protected
            </h2>
          </div>
        </>
      ) : (
        <div className="flex justify-center p-3">
          <Image src={cross} alt="safe" className="w-[20%]" />
          <h2 className="flex flex-col justify-center">
            {" "}
            The Network is NOT safe and protected
          </h2>
        </div>
      )}
    </>
  );
}
