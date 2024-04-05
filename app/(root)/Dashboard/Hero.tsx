"use client";
import heroImg from "@/assets/heroImg.jpg"; // Change the import name to lowercase
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import "../styles/CustomBtnStyles.css";
import LinkInput from "./LinkInput";
export default function Hero() {
  return (
    <>
      <div
        style={{
          position: "relative", // Add position relative to the container
          height: "calc(100vh)",
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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Reveal>
            <div className=" md:text-7xl merriweather-light  sm:text-5xl text-4xl flex justify-center  items-center flex-col mt-4">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Is your Network
              </div>

              <u>
                <span className="animBtn merriweather-light font-semibold">
                  Safe?{" "}
                </span>
              </u>
            </div>
          </Reveal>
          <div className="flex justify-center">
            <p className="animBtn text-base md:text-3xl mt-6 merriweather-light sm:text-2xl">
              Check today{" "}
            </p>
          </div>
          <div>
            <LinkInput />
          </div>
        </div>
      </div>
    </>
  );
}
