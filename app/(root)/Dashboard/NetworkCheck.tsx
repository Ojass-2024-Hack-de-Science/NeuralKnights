"use client";
import tick from "@/assets/tick.png";
import cross from "@/assets/cross.png";
import Image from "next/image";
import { useState } from "react";
import { todoListState } from "@/lib/atom";
import { useRecoilValue } from "recoil";

export default function NetworkCheck() {
  // const [safe, setSafe] = useState(true);
  const safe = useRecoilValue(todoListState)
  console.log(safe)
  // const safeHandler = () => {
  //   setSafe(!safe);
  // };

  return (
    <>
      {/* the tick and its text,  */}
      <div>
        {/* <div
          className="merriweather-light text-5xl flex justify-center text-white items-center p-5"
          style={{ minHeight: "25dvh" }}
        >
          Check a website now !!
        </div> */}
      </div>
      {safe ? (
        <>
          {/* safe */}
          <div className="flex justify-center p-3  result">
            <Image src={tick} alt="safe" className="w-[20%]" />
            <h2
              className="flex flex-col justify-center text-3xl merriweather-light"
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
        <div className="flex justify-center p-3 result">
          <Image src={cross} alt="safe" className="w-[15%]" />
          <h2
            className="flex flex-col justify-center text-3xl merriweather-light"
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
