import React from "react";
import Reveal from "@/components/Reveal";
import img from "../../../assets/aboutUs.png";
import Image from "next/image";
import sideImg from "../../../assets/aaa.jpg";
const About = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return (
      <>
        <div className="flex  bg-slate-200  ">
          <div
            className=" h-auto"
            style={{
              background: `url(${sideImg.src})`,
            }}
          >
            <Image src={sideImg} alt="side image for about" />
          </div>

          <div className="    justify-between p-10 flex-col merriweather-light px-15">
            <div className=" flex justify-center m-auto text-4xl font-semibold">
              <Reveal>
                <Image src={img} alt="about Us image"></Image>
              </Reveal>
            </div>

            <div className="justify-center align-center text-xl">
              <Reveal>
                <div className="flex flex-col justify-center margin-auto">
                  <div>
                    <span style={{ fontSize: "2rem" }}>H</span>
                    {/* </span>{" "} */}
                    ey there! We are a bunch of tech enthusiasts committed to
                    keeping you safe from harmful websites. Our awesome
                    SecurityApp is here to help you with your browsing and
                    security needs.
                  </div>
                  <div>
                    We'll keep you updated on the safety of a website, so you
                    can have peace of mind while surfing the web. Rest assured,
                    we've got your back! We are a group of Tech Enthusiasts to
                    keep you safe from malicious websites. The SecurityApp deals
                    with your browsing and internet security keeping you up to
                    date on whether a website is OK or it may cause damage to
                    you and your systems…. Wondering whether your data will be
                    safe on a particular website, simply enter the link, and our
                    tool will do the analysis for you! Have a doubt? Or a
                    problem with no solution in sight? Check out our friendly
                    bot: eSuraksha or connect with others who may be
                    experiencing similar issues, our Community Post section is
                    the perfect place to do so. We're here to help!
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex  bg-slate-200  ">
        {/* <div
          className=" h-auto"
          style={{
            background: `url(${sideImg.src})`,
          }}
        >
          <Image src={sideImg} alt="side image for about" />
        </div> */}

        <div className="    justify-between p-10 flex-col merriweather-light px-15">
          <div className=" flex justify-center m-auto text-4xl font-semibold">
            <Reveal>
              <Image src={img} alt="about Us image"></Image>
            </Reveal>
          </div>

          <div className="justify-center align-center text-xl">
            <Reveal>
              <div className="flex flex-col justify-center margin-auto">
                <div>
                  <span style={{ fontSize: "2rem" }}>H</span>
                  {/* </span>{" "} */}
                  ey there! We are a bunch of tech enthusiasts committed to
                  keeping you safe from harmful websites. Our awesome
                  SecurityApp is here to help you with your browsing and
                  security needs.
                </div>
                <div>
                  We'll keep you updated on the safety of a website, so you can
                  have peace of mind while surfing the web. Rest assured, we've
                  got your back! We are a group of Tech Enthusiasts to keep you
                  safe from malicious websites. The SecurityApp deals with your
                  browsing and internet security keeping you up to date on
                  whether a website is OK or it may cause damage to you and your
                  systems…. Wondering whether your data will be safe on a
                  particular website, simply enter the link, and our tool will
                  do the analysis for you! Have a doubt? Or a problem with no
                  solution in sight? Check out our friendly bot: eSuraksha or
                  connect with others who may be experiencing similar issues,
                  our Community Post section is the perfect place to do so.
                  We're here to help!
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
