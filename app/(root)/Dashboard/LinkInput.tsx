"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
export default function LinkInput() {
  const [website, setUrl] = useState("");
  const response = {
    count: 8,
    diff_srv_rate: 8,
    dst_bytes: [24, 24, 1433, 24, 24, 24, 1443, 463],
    dst_host_same_srv_rate: 0.875,
    dst_host_srv_count: 7,
    flag: 8,
    protocol_type: [
      "https",
      "https", 
      "https",
      "https",
      "https",
      "https",
      "https",
      "https",
    ],
    same_srv_rate: 0,
    service: 8,
    src_bytes: [0, 0, 1418, 0, 0, 0, 1428, 448],
  };
  const handle = async () => {
    try {
      if (website === "") {
        return null;
      }
      const data = await axios.post(
        "https://humble-sculpin-fair.ngrok-free.app/fetchNetworkData",
        { website }
      );
      for(let i=0;i<response.dst_bytes.length;i++){
        const content = {
          
        }
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
            <Input onChange={(e) => setUrl(e.target.value)} />
            <Button onClick={handle} className=" w-20">
              Check
            </Button>
          </h2>
        </div>
      </Box>
    </>
  );
}
