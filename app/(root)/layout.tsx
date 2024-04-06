import React from "react";
import Chatbot from "./chatbot";
import "./index.css"
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div style={{ zIndex: "1000" }}>
        <Chatbot />
      </div>

      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
