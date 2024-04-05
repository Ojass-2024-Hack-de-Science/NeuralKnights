"use client";
import { Input } from "../../components/ui/input";
import { Box } from "@mui/material";
import Reveal from "@/components/Reveal";

export default function LinkInput() {
  return (
    <>
      <Box>
        <div
          className="flex flex-col  justify-center m-auto py-10  rounded-lg"
          style={
            {
              // backgroundColor: "#133447",
            }
          }
        >
          <h1
            className=" justify-center m-auto p-4 text-5xl pt-7 pb-10"
            style={{
              color: "#7793a3",
            }}
          >
            <Reveal>Enter the Link You Want to Verify</Reveal>
          </h1>
          <h2 className="flex flex-col justify-center m-auto text-3xl pb-4">
            {/* <input type="url" placeholder=" Enter Your Link" required /> */}
            <Input type="url" placeholder="Enter Your Link" required />
          </h2>
        </div>
      </Box>
    </>
  );
}
