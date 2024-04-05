"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
          <h2 className="flex flex-col justify-center m-auto  items-center pb-4 gap-4">
          <Input />
          <Button className=" w-20">
            Check
          </Button>
          </h2>
        </div>
      </Box>
    </>
  );
}
