"use client";
import heroImg from "../../assets/heroImg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import AnimatedText from "@/components/AnimatedText";

export default function Hero() {
  return (
    <>
      <div
        style={{
          position: "relative", // Add position relative to the container
          height: "calc(100vh - 64px)",
          overflow: "hidden",
          //   background: `url(${heroImg})`,
        }}
      >
        <Image src={heroImg} alt="hero Img" />
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
            {/* <AnimatedText> */}
            <p className=" text-8xl" style={{}}>
              Is your Network{" "}
              <u>
                <b>Safe</b>
              </u>
              ?
            </p>
            {/* </AnimatedText> */}
          </Reveal>
          <div>
            <p className=" text-3xl my-7">Check today </p>
          </div>
        </div>
      </div>
    </>
  );
}
