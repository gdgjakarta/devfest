import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const Hackfest = () => {
  return (
    <main>
      <section className="min-h-72 p-4">
        <div className="flex flex-col items-center justify-center gap-4 py-8 bg-zinc-100 rounded-2xl">
          <h2 className="text-center">Road to DevFest Jakarta 2025</h2>
          <h1 className="text-center">HackFest</h1>
          <PrimaryButton destination="">Register Now</PrimaryButton>
        </div>
      </section>
      <section className="min-h-screen py-20">
        <div className="flex flex-col items-center gap-8">
          <h3 className="p-4 rounded-xl border border-zinc-800 bg-rose-200 relative before:absolute before:w-7 before:h-full before:border before:border-zinc-800 before:-left-7 before:top-0 before:rounded-xl before:bg-rose-400 hover:before:h-2/3 before:transition-all after:absolute after:w-7 after:h-full after:border after:border-zinc-800 after:-right-7 after:bottom-0 after:rounded-xl after:bg-rose-400 hover:after:h-2/3 after:transition-all hover:px-8 transition-all">
            Everything you need to know
          </h3>
          <p>
            Get up to speed with the{" "}
            <span className="font-semibold italic">Hackfest rules</span> and
            what makes a{" "}
            <span className="font-semibold italic">winning submission </span>🏆.
          </p>
        </div>
        <div className="flex flex-col md:grid gap-4 grid-cols-4 grid-rows-2 my-8">
          <div className="p-4 md:p-8 border border-yellow-400 bg-yellow-50 rounded-2xl md:row-span-1 md:col-span-1">
            <h4>Hackfest Team</h4>
            <ol>
              <li>3-5 members/team. Only group registrations are accepted.</li>
            </ol>
          </div>
          <div className="p-4 md:p-8 border border-pink-600 bg-pink-50 rounded-2xl md:row-start-2 md:row-span-1 md:col-span-2">
            <h4 className="p-4 rounded-xl border border-pink-400 w-fit mb-4 bg-pink-200">
              Use Case
            </h4>
            <ol className="grid gap-2">
              <li className="flex items-center">
                <div
                  className={String.raw`w-10 h-10 aspect-square block rounded-full border border-zinc-800 bg-pink-400`}
                ></div>
                <div
                  className={String.raw`bg-pink-200 -translate-x-2 border border-zinc-800 w-full h-full rounded-2xl py-2 px-4`}
                >
                  <p>
                    Enhancing Visitor Experience and Operational Efficiency at
                    TMII
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div
                  className={String.raw`w-10 h-10 aspect-square block rounded-full border border-zinc-800 bg-pink-400`}
                ></div>
                <div
                  className={String.raw`bg-pink-200 -translate-x-2 border border-zinc-800 w-full h-full rounded-2xl py-2 px-4`}
                >
                  <p>
                    Deepening Cultural Engagement and Expanding Value Delivery
                    through AI at TMII
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div
                  className={String.raw`w-10 h-10 aspect-square block rounded-full border border-zinc-800 bg-pink-400`}
                ></div>
                <div
                  className={String.raw`bg-pink-200 -translate-x-2 border border-zinc-800 w-full h-full rounded-2xl py-2 px-4`}
                >
                  <p>
                    Fostering Sustainable Practices and Enriching Visitor
                    Participation at TMII
                  </p>
                </div>
              </li>
              <li>Open for any Innovation!</li>
            </ol>
          </div>
          <div className="p-4 border border-blue-400 bg-blue-50 rounded-2xl md:row-span-1 md:col-span-1">
            <h4>Judging Criteria</h4>
            <ol className="flex flex-wrap gap-2 py-4">
              <li className="py-2 px-4 rounded-full border border-blue-400 flex items-center w-fit gap-1">
                <div className="w-4 h-4 aspect-square rounded-full border border-blue-400"></div>
                <p>Impact</p>
              </li>
              <li className="py-2 px-4 rounded-full border border-blue-400 flex items-center w-fit gap-1">
                <div className="w-4 h-4 aspect-square rounded-full border border-blue-400"></div>
                <p>Innovation</p>
              </li>
              <li className="py-2 px-4 rounded-full border border-blue-400 flex items-center w-fit gap-1">
                <div className="w-4 h-4 aspect-square rounded-full border border-blue-400"></div>
                <p>Technical</p>
              </li>
              <li className="py-2 px-4 rounded-full border border-blue-400 flex items-center w-fit gap-1">
                <div className="w-4 h-4 aspect-square rounded-full border border-blue-400"></div>
                <p>Implementation</p>
              </li>
              <li className="py-2 px-4 rounded-full border border-blue-400 flex items-center w-fit gap-1">
                <div className="w-4 h-4 aspect-square rounded-full border border-blue-400"></div>
                <p>Presentation</p>
              </li>
              <li className="py-2 px-4 rounded-full border border-blue-400 flex items-center w-fit gap-1">
                <div className="w-4 h-4 aspect-square rounded-full border border-blue-400"></div>
                <p>Completeness</p>
              </li>
            </ol>
          </div>
          <div className="p-4 md:p-8 border border-green-600 bg-green-50 rounded-2xl md:row-start-1 md:row-span-2 md:col-span-2">
            <h4>Submission Requirement</h4>
            <ol>
              <li>Project Link Repository</li>
              <li>Short-demo video</li>
              <li>Project Summary</li>
              <li>Final presentation deck.</li>
              <li>Presentation video (backup)</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hackfest;
