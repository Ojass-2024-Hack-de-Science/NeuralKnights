"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box } from "@mui/material";
import Reveal from "@/components/Reveal";
import Link from "next/link";
export default function LinkInput() {
  return (
    <>
      <Box>
        <Reveal>
          <div
            className="flex flex-col  justify-center m-auto my-8 py-3 px-5 rounded-lg"
            style={{
              backgroundColor: "rgba(19, 52, 71, 0.5)",
            }}
          >
            <h1
              className=" justify-center m-auto py-4 sm:text-xl text-lg md:text-2xl lg:text-3xl pt-7 pb-10 merriweather-light flex text-center"
              style={{
                color: "white",
                // textShadow: "2px 2px #ffffff",
              }}
            >
              <Reveal>
                <b>Enter the Link You Want to Verify</b>
              </Reveal>
            </h1>
            <h2 className="flex flex-col justify-center m-auto text-3xl pb-4">
              {/* <input type="url" placeholder=" Enter Your Link" required /> */}
              <Input
                type="url"
                placeholder="Enter Your Link"
                required
                className="merriweather-light"
                style={{ minWidth: "45dvw" }}
              />
            </h2>
            <div className="flex justify-center merriweather-light pb-4">
              <Button
                className=""
                variant={"secondary"}
                style={{ fontSize: "1em" }}
              >
                Check
              </Button>
            </div>
          </div>
        </Reveal>
      </Box>
    </>
  );
}
