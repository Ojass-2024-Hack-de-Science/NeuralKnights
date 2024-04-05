import React, { useState, useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import img from "../../../assets/aboutUs.png";
import Image from "next/image";
import sideImg from "../../../assets/aaa.jpg";

const About = () => {
  const [width, setWidth] = useState(0); // Initial width is 0
  const [textHeight, setTextHeight] = useState(0); // State to store text height
  const textRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // Subscribe to window resize event
    window.addEventListener("resize", handleResizeWindow);
    // Unsubscribe on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    // Calculate and set text height when the component mounts or text changes
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [width]); // Only trigger effect when width changes

  return (
    <div className="flex bg-slate-200">
      {width > 1100 ? (
        <div
          style={{
            background: `url(${sideImg.src})`,
            height: "80vh",
            overflow: "hidden",
            width: "50vw",
          }}
        >
          <Image
            src={sideImg}
            alt="side image for about"
            layout="fill" // Fill the container size
            objectFit="cover" // Cover the container with the image
            objectPosition="center" // Center the image in the container
          />
        </div>
      ) : null}
      <div className="justify-between p-10 flex-col merriweather-light px-15">
        <div className="flex justify-center m-auto text-4xl font-semibold">
          <Image
            src={img}
            style={{ height: "100", width: "em" }}
            alt="about Us image"
            layout="fixed" // Keep the image dimensions fixed
          />
        </div>
        <div
          className="justify-center align-center"
          style={{ height: textHeight }}
        >
          <div
            className="flex flex-col justify-center items-center margin-auto md:mt-12"
            ref={textRef} // Reference
          >
            <Reveal>
              <div className="md:text-lg sm:text-xxs text-xxs xl:text-xl">
                <p className="text-6xl m-6">
                  The perfect solution to keep you safe.
                </p>
                <p className="text-xl m-6">
                  We're a tech team committed to keeping malicious sites away
                  from you. Our SecurityApp keeps you updated on website safety.
                  Check a website's safety with our tool. Need help or have
                  doubts? Reach out to our friendly bot or community post.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
