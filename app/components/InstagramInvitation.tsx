import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const InstagramInvitation = () => {
  return (
    <section className="pb-20 p-4">
      <div className="relative p-8 bg-purple-400 border border-zinc-800 rounded-2xl flex flex-col items-center gap-8">
        <Image
          src="/devfest/pattern.png"
          alt="arrow up"
          width={200}
          height={200}
          className="w-auto h-36 md:h-44 absolute left-0 bottom-0 opacity-30"
        />
        <Image
          src="/devfest/pattern.png"
          alt="arrow up"
          width={200}
          height={200}
          className="hidden md:block w-auto h-28 md:h-44 absolute right-0 bottom-0 -scale-x-100 opacity-30"
        />
        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/Jakarta Geeks Channel.png"
            alt="arrow up"
            width={200}
            height={200}
            className="h-full w-auto z-10"
          />
          <div className="w-full flex flex-col items-start gap-4">
            <h2 className="text-white">
              Follow and Join our Instagram{" "}
              <br className="hidden md:inline-block" />
              to stay up-to-date!
            </h2>
            <PrimaryButton
              destination="https://www.instagram.com/gdgjakarta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="z-50"
            >
              Join Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramInvitation;
