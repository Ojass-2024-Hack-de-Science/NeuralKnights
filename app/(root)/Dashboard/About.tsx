import React from "react";
import Reveal from "@/components/Reveal";
const About = () => {
  return (
    <div className="w-[100vw]  bg-slate-200 flex  justify-between p-10 flex-col merriweather-light px-15">
      <Reveal>
        <div className=" text-xl font-semibold">About Us</div>
        <div className="flex justify-center align-center text-2xl">
          Hey there! We are a bunch of tech enthusiasts committed to keeping you
          safe from harmful websites. Our awesome SecurityApp is here to help
          you with your browsing and security needs. We'll always keep you
          updated on the safety of a website, so you can have peace of mind
          while surfing the web. Rest assured, we've got your back! We are a
          group of Tech Enthusiasts to keep you safe from malicious websites.
          The SecurityApp deals with your browsing and internet security keeping
          you up to date on whether a website is OK or it may cause damage to
          you and your systems…. Wondering whether your data will be safe on a
          particular website, simply enter the link, and our tool will do the
          analysis for you! Have a doubt? Or a problem with no solution in
          sight? Check out our friendly bot: eSuraksha or connect with others
          who may be experiencing similar issues, our Community Post section is
          the perfect place to do so. We're here to help!
        </div>
      </Reveal>
    </div>
  );
};

export default About;
