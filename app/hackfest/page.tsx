import React from "react";
import { promises as fs } from "fs";
import PrimaryButton from "../components/PrimaryButton";
import ListItem from "../components/ListItem";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import SecondaryButton from "../components/SecondaryButton";

type RegistrationStep = {
  step: number;
  title: string;
  description: string;
  notes: Array<string>;
  action: string;
};

async function Hackfest() {
  const registrationSteps = await fs.readFile(
    process.cwd() + "/app/hackfest/steps.json",
    "utf8"
  );

  const stepsData = JSON.parse(registrationSteps);

  const criteria = [
    {
      criteria: "Impact",
      ratio: 35,
      description:
        "Potential to solve a real-world problem or create significant value for TMII.",
    },
    {
      criteria: "Innovation",
      ratio: 25,
      description: "Originality and uniqueness of the idea.",
    },
    {
      criteria: "Technical Impl.",
      ratio: 20,
      description:
        "Quality of code, functionality, and effective use of relevant technologies.",
    },
    {
      criteria: "Presentation",
      ratio: 15,
      description: "Clarity and effectiveness of the pitch and demonstration.",
    },
    {
      criteria: "Completeness",
      ratio: 5,
      description:
        "How well the project meets the proposed scope requirements and time.",
    },
  ];

  return (
    <main className="text-zinc-600">
      <section className="min-h-72 p-4">
        <div className="flex flex-col items-center justify-center gap-4 py-8 bg-zinc-100 rounded-2xl">
          <h2 className="text-center">Road to DevFest Jakarta 2025</h2>
          <h1 className="text-center">HackFest</h1>
          <PrimaryButton destination="">Register Now</PrimaryButton>
        </div>
      </section>
      <section className="py-20">
        <p className="text-center max-w-3xl mx-auto my-0 text-zinc-500">
          Hackathon are{" "}
          <span className="text-zinc-800">
            collaborative coding events where teams work intensively to build a
            software project
          </span>
          . These events provide participants with a great opportunity to gain
          valuable hands-on experience in a fast-paced environment.{" "}
          <span className="text-zinc-800">HACKFEST</span> is a hackathon helds
          by <span className="text-zinc-800">GDG Jakarta</span> in order to
          drive innovation and creativity ahead of the industry, and parts of
          <span className="text-zinc-800">DevFest Jakarta 2025</span>.
        </p>
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
            <h4 className="p-4 rounded-xl border border-yellow-400 w-fit mb-4 bg-yellow-200">
              Hackfest Team
            </h4>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/devfest/5_person.svg"
                alt="team members"
                width={150}
                height={150}
              />
              <h4 className="text-center">3-5 members/team.</h4>
              <p className="text-center">
                Only group registrations are accepted.
              </p>
            </div>
          </div>
          <div className="p-4 md:p-8 border border-pink-600 bg-pink-50 rounded-2xl md:row-start-2 md:row-span-1 md:col-span-2">
            <h4 className="p-4 rounded-xl border border-pink-400 w-fit mb-4 bg-pink-200 ">
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
          <div className="p-4 border border-blue-400 bg-blue-50 rounded-2xl md:row-span-1 md:col-span-3">
            <h4 className="p-4 rounded-xl border border-blue-400 w-fit mb-4 bg-blue-200">
              Judging Criteria
            </h4>
            <ol className="grid gap-4 py-4">
              {criteria.map((item, index) => (
                <CriteriaItem
                  key={index}
                  criteria={item.criteria}
                  ratio={item.ratio}
                  description={item.description}
                />
              ))}
            </ol>
          </div>
          <div className="p-4 md:p-8 border border-green-600 bg-green-50 rounded-2xl md:row-start-2 md:row-span-1 md:col-span-2">
            <h4 className="p-4 rounded-xl border border-green-400 w-fit mb-4 bg-green-200">
              Submission Requirement
            </h4>
            <ol className="grid gap-2">
              <ListItem colorScheme="green">Project Link Repository</ListItem>
              <ListItem colorScheme="green">Short-demo video</ListItem>
              <ListItem colorScheme="green">Project Summary</ListItem>
              <ListItem colorScheme="green">
                Presentation video (backup)
              </ListItem>
            </ol>
          </div>
        </div>
      </section>
      <section className="min-h-screen py-20">
        <div className="flex flex-col items-center gap-8">
          <h3 className="p-4 rounded-xl border border-zinc-800 bg-sky-200 relative before:absolute before:w-7 before:h-full before:border before:border-zinc-800 before:-left-7 before:top-0 before:rounded-xl before:bg-sky-400 hover:before:h-2/3 before:transition-all after:absolute after:w-7 after:h-full after:border after:border-zinc-800 after:-right-7 after:bottom-0 after:rounded-xl after:bg-sky-400 hover:after:h-2/3 after:transition-all hover:px-8 transition-all">
            Benefits & Deliverables
          </h3>
          <p>
            Get up to speed with the{" "}
            <span className="font-semibold italic">Hackfest rules</span> and
            what makes a{" "}
            <span className="font-semibold italic">winning submission </span>🏆.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 my-8">
            <div className="rounded-2xl border border-zinc-800 bg-white flex flex-col items-center max-w-2xs">
              <h4 className="py-4 px-8 border-b border-zinc-800 w-full text-center">
                Project Output/Prototypes
              </h4>
              <p className="p-4 text-center">
                Working demos, source code, or proof-of-concept solutions built
                during the hackathon.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-white flex flex-col items-center max-w-2xs">
              <h4 className="py-4 px-8 border-b border-zinc-800 w-full text-center">
                Feedback & Insights
              </h4>
              <p className="p-4 text-center">
                Early validation on the brand’s products, APIs, or tools from
                real developers using them.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-white flex flex-col items-center max-w-2xs">
              <h4 className="py-4 px-8 border-b border-zinc-800 w-full text-center">
                Fresh Ideas & Approaches
              </h4>
              <p className="p-4 text-center">
                Unique perspectives from diverse participants that the brand
                might not develop internally.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-white flex flex-col items-center max-w-2xs">
              <h4 className="py-4 px-8 border-b border-zinc-800 w-full text-center">
                Talent Pool
              </h4>
              <p className="p-4 text-center">
                Access to potential hires who already showed problem-solving and
                technical skills.
              </p>
            </div>
          </div>
          <div className="grid place-content-center">
            <Image
              src="/devfest/diecut.svg"
              alt="arrow up"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="flex flex-col items-center gap-8">
          <h3 className="p-4 rounded-xl border border-zinc-800 bg-yellow-200 relative before:absolute before:w-7 before:h-full before:border before:border-zinc-800 before:-left-7 before:top-0 before:rounded-xl before:bg-yellow-400 hover:before:h-2/3 before:transition-all after:absolute after:w-7 after:h-full after:border after:border-zinc-800 after:-right-7 after:bottom-0 after:rounded-xl after:bg-yellow-400 hover:after:h-2/3 after:transition-all hover:px-8 transition-all">
            How to Register for Hackfest
          </h3>
          <p>
            Ready to build, innovate, and compete? Follow these steps to secure
            your team`&apos;`s spot.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 my-8">
          <div className="hidden md:block w-full h-full rounded-2xl overflow-clip bg-[url(/devfest/background.png)] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-300 border border-zinc-800"></div>
          <div className="h-full flex">
            <ol className="grid gap-4 md:overflow-y-scroll md:[scrollbar-width:1px] md:h-[600px] w-full md:px-4 scroll-smooth">
              {stepsData.registration_process.steps.map(
                (step: RegistrationStep, index: number) => (
                  <li id={`step-${step.step}`} key={index}>
                    <div className="bg-white p-4 border border-zinc-800 rounded-2xl w-full">
                      <div className="flex items-center gap-2">
                        <h4 className="w-10 h-10 aspect-square border border-zinc-800 bg-amber-100 rounded-full grid place-content-center">
                          {step.step}
                        </h4>
                        <h5 className="px-4 py-2 rounded-full border border-zinc-800 w-full bg-amber-100">
                          {step.title}
                        </h5>
                      </div>
                      <p className="py-4">{step.description}</p>
                      {step.action && (
                        <SecondaryButton destination="">
                          {step.action}
                        </SecondaryButton>
                      )}
                    </div>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </section>
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
          <h2 className="md:max-w-2/3 text-center text-white">
            Join our Discord server to stay updated!
          </h2>
          <PrimaryButton destination="" className="z-50">
            Join Now
          </PrimaryButton>
        </div>
      </section>
    </main>
  );
}

interface CriteriaItemProps {
  criteria: string;
  ratio: number;
  description: string;
}

const CriteriaItem = ({ criteria, ratio, description }: CriteriaItemProps) => {
  return (
    <li className="grid md:grid-cols-9 md:grid-rows-1 gap-4">
      <div className="flex items-center justify-between md:col-span-3 w-full">
        <div className="flex items-center">
          <p
            className={String.raw`inline-block w-16 py-2 px-4 rounded-full border border-blue-400 bg-blue-400 text-white text-center gap-1`}
          >
            {ratio}%
          </p>
          <p className="inline-block py-2 px-4 rounded-full border border-blue-400 w-full gap-1">
            {criteria}
          </p>
        </div>

        <ArrowBigRightDash className="fill-blue-100 text-blue-400 col-span-1 hidden md:block" />
      </div>
      <p className="md:col-span-6 w-fit">{description}</p>
    </li>
  );
};

export default Hackfest;
