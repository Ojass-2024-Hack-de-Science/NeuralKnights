"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box } from "@mui/material";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import axios from "axios";
import { todoListState } from "@/lib/atom";
import { useSetRecoilState } from "recoil";

export default function LinkInput() {
  const [website,setWebsite] = useState("");
  // const [flag,setFlag] = useState(0);
  const set = useSetRecoilState(todoListState)
//   const res = {
//     "count": 6,
//     "diff_srv_rate": [6, 6, 6, 6, 6, 6],
//     "dst_bytes": [24, 24, 24, 24, 24, 904],
//     "dst_host_same_srv_rate": 1,
//     "dst_host_srv_count": 6,
//     "flag": 6,
//     "protocol_type": ["https:", "https:", "https:", "https:", "https:", "https:"],
//     "same_srv_rate": 0,
//     "service": 6,
//     "src_bytes": [0, 0, 0, 0, 0, 889]
// }


// // {
// //   "protocol_type": 1,
// //   "service": 19,
// //   "flag": 9,
// //   "src_bytes": 491,
// //   "dst_bytes": 0,
// //   "count": 2,
// //   "same_srv_rate": 1.00,
// //   "diff_srv_rate": 0.00,
// //   "dst_host_srv_count": 25,
// //   "dst_host_same_srv_rate": 0.17
// // }

  const handleML=async()=>{
    const data: { [key: string]: number } = {
      "ftp_data": 19,
      "other": 41,
      "private": 46,
      "https:": 22,
      "remote_job": 48,
      "name": 33,
      "netbios_ns": 35,
      "domain_u": 11,
      "eco_i": 13,
      "uucp": 62,
      "mtp": 32,
      "supdup": 55,
      "Z38_50": 2,
      "smtp": 51,
      "netbios_dgm": 34,
      "auth": 3,
      "csnet_ns": 6,
      "Z39": 50,
      "bgp": 4,
      "ecr_i": 14,
      "gopher": 20,
      "rfs": 19,
      "vmnet": 64,
      "systat": 56,
      "efs": 15,
      "iso_tap": 26,
      "klogin": 27,
      "uucp_path": 63,
      "link": 30,
      "sunrpc": 54,
      "login": 31,
      "kshell": 28,
      "sql_net": 52,
      "ssh": 53,
      "telnet": 57,
      "whois": 65,
      "imap4": 25,
      "netstat": 37,
      "hostnames": 21,
      "pop_3": 44,
      "iso_tsap": 26
  }
  
    try{
      const response = await axios.post("https://humble-sculpin-fair.ngrok-free.app/fetchNetworkData",{website})
    const res = response.data.data;
      for(let i=0;i<res.dst_bytes.length;i++){
        const content:any = {
          protocol_type:data[res.protocol_type[i]],
          service: res.service,
          flag: res.flag,
          src_bytes:res.src_bytes[i],
          dst_bytes:res.dst_bytes[i],
          count:res.count,
          same_srv_rate:res.same_srv_rate,
          diff_srv_rate:res.diff_srv_rate,
          dst_host_srv_count: res.dst_host_srv_count,
          dst_host_same_srv_rate:res.dst_host_same_srv_rate,
        }
        const ML = await axios.post("https://hornet-inspired-remotely.ngrok-free.app/ghjanomaly_prediction",content)
        console.log(ML)
        if(ML.data.prediction[0] === 1){
          set(1)
          break;
        }
      }
      set(0)
    }catch(error){
      console.log(error)
    }
  }
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
              onChange={(e)=>{setWebsite(e.target.value)}}
                type="url"
                placeholder="Enter Your Link"
                required
                className="merriweather-light text-black"
                style={{ minWidth: "45dvw" }}
              />
            </h2>
            <div className="flex justify-center merriweather-light pb-4">
              <Button
              onClick={handleML}
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