import React from "react";
import Chatbot from "./chatbot";
import Footer from "../(root)/dashboard/Footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap')
      </style>
      <div style={{ zIndex: "1000" }}>
        <Chatbot />
      </div>

      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
