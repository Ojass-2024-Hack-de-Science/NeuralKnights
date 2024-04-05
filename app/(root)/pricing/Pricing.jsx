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
          fontSize: "2rem",
          margin: "1em",
        }}
        className="merriweather-light"
      >
        PRICING
      </div>
      <div class="wrapper ">
        <div
          class="pricing-table gprice-single"
          style={{ maxHeight: "80dvh", backgroundColor: "#002c46" }}
        >
          <div class="head">
            <h4 class="title text-white">Basic</h4>
          </div>
          <div class="content">
            <div class="price">
              <h1>$19</h1>
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
            <div class="sign-up">
              <a href="#" class="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div
          class="pricing-table gprice-single"
          style={{ maxHeight: "80dvh", backgroundColor: "#002c46" }}
        >
          <div class="head">
            <h4 class="title  text-white">Standard</h4>
          </div>
          <div class="content">
            <div class="price">
              <h1>$29</h1>
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
            <div class="sign-up">
              <a href="#" class="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div
          class="pricing-table gprice-single"
          style={{ maxHeight: "80dvh", backgroundColor: "#002c46" }}
        >
          <div class="head">
            <h4 class="title  text-white">Premium</h4>
          </div>
          <div class="content">
            <div class="price">
              <h1>$39</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>Monthly Billing Software</li>
              <li>1 Free Website</li>
            </ul>
            <div class="sign-up">
              <a href="#" class="btn bordered radius">
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
