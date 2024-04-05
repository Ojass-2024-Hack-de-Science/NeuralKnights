"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

const BuyProduct = ({ user, amt }) => {
  const router = useRouter();

  const makePayment = async ({ productId = null }) => {
    // "use server"
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);
    // Make API call to the serverless API
    const data = await fetch("http://localhost:3000/api/razorpay");
    const { order } = await data.json();
    console.log(order.id);
    const options = {
      key: key,
      name: "SOMESH DWIVEDI",
      image:
        "https://avatars.githubusercontent.com/u/116994984?s=400&u=52aac5eede573ac909e6f5c2c381061dcc7942bf&v=4",
      currency: order.currency,
      amount: amt,
      order_id: order.id,
      description: "Make payment for Ojass-2k24",
      // image: logoBase64,
      handler: async function (response) {
        // if (response.length==0) return <Loading/>;
        console.log(response);

        const data = await fetch("http://localhost:3000/api/paymentverify", {
          method: "POST",
          // headers: {
          //   // Authorization: 'YOUR_AUTH_HERE'
          // },
          body: JSON.stringify({
            name: user.name,
            mongoId: user.id,
            email: user.email,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const res = await data.json();

        console.log("response verify==", res);

        if (res?.message == "success") {
          console.log("redirected.......");
          router.push(
            "/paymentsuccess?paymentid=" + response.razorpay_payment_id
          );
        }

        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "User",
        email: "User email here ",
        contact: "User contact here ",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
