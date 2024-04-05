import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-center text-xl font-bold">{children}</div>;
};

export default Header;
