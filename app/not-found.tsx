"use client";

import Image from "next/image";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

export default function NotFound() {
  return (
    <section className="h-[60vh] py-20 flex flex-col items-center">
      <div className="flex flex-col gap-8 h-full w-full items-center justify-center">
        <div className="flex items-center gap-8">
          <Image
            src="/devfest/4_green.svg"
            alt="arrow up"
            width={150}
            height={150}
            className="h-20 w-auto md:h-32 hover:-scale-100 transition-all duration-700 grayscale hover:grayscale-0"
          />
          <Image
            src="/devfest/globe_monoline.svg"
            alt="arrow up"
            width={150}
            height={150}
            className="h-20 w-auto md:h-32"
          />
          <Image
            src="/devfest/4_blue.svg"
            alt="arrow up"
            width={150}
            height={150}
            className="h-20 w-auto md:h-32 hover:-scale-100 transition-all duration-700 grayscale hover:grayscale-0"
          />
        </div>
        <h2 className="text-center">It seems you got a little bit lost</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <SecondaryButton destination="/hackfest">
            Visit Hackfest
          </SecondaryButton>
          <PrimaryButton destination="/">Back to Home</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
