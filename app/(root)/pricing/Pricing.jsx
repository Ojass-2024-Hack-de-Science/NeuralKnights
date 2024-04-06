"use client";
import React from "react";
import "../styles/CustomBtnStyles.css";
import "../styles/PricingStyles.css";
import BuyProduct from "../../../components/razorpay/BuyProduct";
import { useState, useEffect } from "react";
import { getUser } from "../../../action/getUser";
import { useSession } from "next-auth/react";

import Footer from "../dashboard/Footer";
const Pricing = () => {
  const [userData, setUser] = useState(null);
  const [userExists, setExistence] = useState(false);
  const [amt, setAmt] = useState(49900);
  const user = useSession();
  console.log("User is  : ", user);
  useEffect(() => {
    if (user.isLoaded === false) return;
    const userId = user?.user?.id;
    getUser(userId)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.isLoaded]);
  async function doesExist(email) {
    const resp = await fetch("http://localhost:3000/api/isPaid", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
    console.log("Response is  : ", resp);
    if (resp.status === 200) {
      setExistence(true);
    } else {
      setExistence(false);
    }
  }
  useEffect(() => {
    const data = {
      id: userData?.user?._id,
      externalUserId: userData?.user?.externalUserId,
      name: userData?.user?.name,
      email: userData?.user?.email,
      _v: 0,
    };
    setUser(data);
    doesExist(data.email);
    setAmt(100);
    console.log("Amount = ", amt);
  }, [user.isLoaded]);

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
              <h1>₹199</h1>
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
                <BuyProduct user={user} amt={19900} />
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
            <div class="sign-up">
              <a href="#" class="btn bordered radius">
                <BuyProduct user={user} amt={34900} />
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
