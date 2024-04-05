"use client";
import heroImg from "@/assets/heroImg.jpg"; // Change the import name to lowercase
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import "../styles/CustomBtnStyles.css";
export default function Hero() {
  return (
    <>
      <div
        style={{
          position: "relative", // Add position relative to the container
          height: "calc(100vh )",
          overflow: "hidden",
          background: `url(${heroImg.src})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-white z-20"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Reveal>
            <div className=" text-7xl merriweather-light    flex justify-center  items-center flex-col">
              Is your Network{" "}
              <u>
                <b className="animBtn merriweather-light">Safe ? </b>
              </u>
            </div>
          </Reveal>
          <div className="flex justify-center">
            <p className="animBtn text-3xl my-7 merriweather-light">
              Check today{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
