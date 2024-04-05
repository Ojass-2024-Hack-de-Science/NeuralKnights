"use client";
import React from "react";
import "../styles/CustomBtnStyles.css";
import { Button } from "@/components/ui/button";
import { TiTick } from "react-icons/ti";
import BuyProduct from "../../../components/razorpay/BuyProduct";
import { useState, useEffect } from "react";
import { getUser } from "../../../action/getUser";
import { useSession } from "next-auth/react";

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
    <div
      style={{
        minHeight: "100vh",
        background:
          "rgb(0,0,0) linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div>
        <BuyProduct user={user} amt={1542} />
      </div>
    </div>
  );
};

export default Pricing;
