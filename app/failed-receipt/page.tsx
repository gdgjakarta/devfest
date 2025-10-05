"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const FailedReceipt = () => {
  return (
    <section className="h-[60vh] py-20">
      <div className="max-w-3xs -translate-x-1/4">
        <DotLottieReact src="failed.lottie" loop autoplay />
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <h1>Oppsyy! </h1>
        <h3>Your payment can't be processed.</h3>
        <div>
          <PrimaryButton destination="https://www.instagram.com/gdgjakarta/">
            Contact us for help
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default FailedReceipt;
