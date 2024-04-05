"use client";
import React from "react";
import "../styles/CustomBtnStyles.css";
import "../styles/PricingStyles.css";
import "../styles/CustomBtnStyles.css";
import Footer from "../dashboard/Footer";
const Pricing = () => {
  return (
    <>
      {/* backgroundColor: "#002c46" */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          margin: "0.5em",
        }}
        className="merriweather-light"
      >
        PRICING
      </div>
      <div className="wrapper ">
        <div
          className="pricing-table gprice-single"
          style={{ maxHeight: "80dvh", backgroundColor: "#002c46" }}
        >
          <div className="head">
            <h4 className="title text-white">Basic</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>FREE</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>
                {" "}
                <del>Monthly Billing Software</del>{" "}
              </li>
              <li>
                {" "}
                <del>1 Free Website</del>
              </li>
            </ul>
            <div
              style={{
                color: "white",
                fontSize: "2em",
                border: "1px solid white",
              }}
            >
              Current plan
            </div>
          </div>
        </div>
        <div
          className="pricing-table gprice-single"
          style={{ maxHeight: "80dvh", backgroundColor: "#002c46" }}
        >
          <div className="head">
            <h4 className="title  text-white">Standard</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>₹149</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>Monthly Billing Software</li>
              <li>
                <del>1 Free Website</del>
              </li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div
          className="pricing-table gprice-single"
          style={{ maxHeight: "80dvh", backgroundColor: "#002c46" }}
        >
          <div className="head">
            <h4 className="title  text-white">Premium</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>₹349</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>Monthly Billing Software</li>
              <li>1 Free Website</li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
