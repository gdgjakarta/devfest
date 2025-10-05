"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const Receipt = () => {
  return (
    <section className="h-[60vh] py-20">
      <div className="max-w-3xs -translate-x-1/4">
        <DotLottieReact src="success.lottie" loop autoplay />
      </div>
      <div className="flex flex-col gap-4">
        <h1>Thank you!</h1>
        <h3>Your payment has been processed succesfully.</h3>
      </div>
    </section>
  );
};

export default Receipt;
