import React from "react";
import Reveal from "@/components/Reveal";
import img from "../../../assets/aboutUs.png";
import Image from "next/image";
import sideImg from "../../../assets/aaa.jpg";
const About = () => {
  const [width, setWidth] = React.useState(0); // Initial width is 0

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // Subscribe to window resize event
    window.addEventListener("resize", handleResizeWindow);
    // Unsubscribe on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div className="flex  bg-slate-200">
        <div style={{ background: `url(${sideImg.src})` }} className=" hidden md:flex">
          <Image src={sideImg} style={{
            overflow:"hidden",
            height:"80vh"
          }} alt="side image for about" />
        </div>
      <div className="justify-between p-10 flex-col merriweather-light px-15">
        {width < 700 ? (
          <div className="w-[60%] flex justify-center m-auto text-4xl font-semibold">
            <Image src={img} width={4000} height={4000} alt="about Us image" />
          </div>
        ) : (
          <div className="w-[45%] flex justify-center m-auto text-4xl font-semibold">
            <Image src={img} width={4000} height={4000} alt="about Us image" />
          </div>
        )}

        <div className="justify-center align-center ">
          {/* <Reveal> */}
          <div className="flex flex-col justify-center items-center margin-auto md:mt-12">
            <Reveal>
              <div className="md:text-lg sm:text-xxs text-xxs xl:text-xl">
                {" "}
                <p className="lg:text-4xl md:text-4xl sm:text-md  text-xxs xl:text-6xl text-xl ">
                  <b>The perfect solution to keep you safe.</b>
                </p>
                <p className="md:text-lg sm:text-xs text-xs xl:text-2xl mt-3">
                  We're a tech team committed to keeping malicious sites away
                  from you. Our SecurityApp keeps you updated on website safety.
                  Check a website's safety with our tool. Need help or have
                  doubts? Reach out to our friendly bot or community post.
                </p>
              </div>
            </Reveal>
          </div>
          {/* </Reveal> */}
        </div>
      </div>
    </div>
  );
};

export default About;
