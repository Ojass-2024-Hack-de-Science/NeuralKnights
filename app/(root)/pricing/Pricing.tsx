import React from "react";
import "../styles/CustomBtnStyles.css";
import { Button } from "@/components/ui/button";
const Pricing = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "rgb(0,0,0) linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div>
        <div className=" merriweather-light text-white text-6xl mx-5 py-2 flex justify-center items-center ">
          PRICING
        </div>
        <div className="flex justify-center items-center ">
          <div
            className="mx-4 px-4 flex flex-col justify-between"
            style={{
              border: "2px solid white",
              maxWidth: "400px",
              minHeight: "400px",
              backgroundColor: "black",
            }}
          >
            <div className="merriweather-light text-4xl text-white animBtn  my-2">
              Base plan
            </div>
            <div className="merriweather-light text-white text-2xl my-3">
              <ol>
                <li className="my-2">Free site checking upto 5 sites a day</li>
                <li className="my-2">Free Chat feature</li>
              </ol>
            </div>
            <div className="flex justify-center items-end my-3">
              <Button style={{ width: "100%", backgroundColor: "blue" }}>
                Subscribe
              </Button>
            </div>
          </div>
          <div
            className="mx-4 px-4 flex flex-col justify-between"
            style={{
              border: "2px solid white",
              maxWidth: "400px",
              minHeight: "400px",
              backgroundColor: "black",
            }}
          >
            <div className="merriweather-light text-4xl text-white animBtn  my-2">
              Premium plan
            </div>
            <div className="merriweather-light text-white text-2xl my-3">
              <ol>
                <li className="my-2">Free site checking upto 5 sites a day</li>
                <li className="my-2">Free Chat feature</li>
              </ol>
            </div>
            <div className="flex justify-center items-end my-3">
              <Button style={{ width: "100%", backgroundColor: "blue" }}>
                Subscribe
              </Button>
            </div>
          </div>
          <div
            className="mx-4 px-4 flex flex-col justify-between"
            style={{
              border: "2px solid white",
              maxWidth: "400px",
              minHeight: "400px",
              backgroundColor: "black",
            }}
          >
            <div className="merriweather-light text-4xl text-white animBtn  my-2">
              Special plan
            </div>
            <div className="merriweather-light text-white text-2xl my-3">
              <ol>
                <li className="my-2">Free site checking upto 5 sites a day</li>
                <li className="my-2">Free Chat feature</li>
              </ol>
            </div>
            <div className="flex justify-center items-end my-3">
              <Button style={{ width: "100%", backgroundColor: "blue" }}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
