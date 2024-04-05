"use client";
import tick from "../../assets/tick.jpg";
import cross from "../../assets/cross.jpg";
import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";
import NetworkCheck from "./NetworkCheck";
import { Box } from "@mui/material";

export default function LinkInput() {
  return (
    <>
      <Box>
        <div
          className="flex flex-col  justify-center m-auto p-3 m-6 rounded-lg"
          style={{
            backgroundColor: "#2f94f7",
          }}
        >
          <h1
            className=" justify-center m-auto p-4 text-lg"
            style={{
              color: "white",
            }}
          >
            Enter the Link You Want to Verify
          </h1>
          <h2 className="flex flex-col justify-center m-auto  pb-4">
            <input type="url" placeholder=" Enter Your Link" required />
          </h2>
        </div>
      </Box>
    </>
  );
}
