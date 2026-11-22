
import { attorneys } from "../data/content";
import AttorneyCard from "../components/AttorneyCard.jsx";
import AttorneyModal from "../components/AttorneyModal.jsx";
import { useState } from "react";

function Attorneys() {
  const [selectedAttorney, setSelectedAttorney] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-midnight px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
            THE PEOPLE BEHIND OUR FIRM
          </p>

          <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Meet Our Attorneys
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">
            Our attorneys bring thoughtful guidance, professional experience,
            and a commitment to understanding every client's needs.
          </p>
        </div>
      </section>

      {/* Attorneys */}
      <section className="bg-[#EFEAE0] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              OUR LEGAL TEAM
            </p>

            <h2 className="font-heading text-3xl text-midnight md:text-4xl">
              Experience & Dedication
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate">
              Get to know the professionals dedicated to providing clear,
              considered legal guidance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {attorneys.map((attorney) => (
              <div
                key={attorney.id}
                onClick={() => setSelectedAttorney(attorney)}
                className="cursor-pointer"
              >
                <AttorneyCard attorney={attorney} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ivory px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
            LET'S WORK TOGETHER
          </p>

          <h2 className="font-heading text-3xl leading-tight text-midnight md:text-5xl">
            The Right Legal Team Makes a Difference
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate">
            Whether you're facing a legal challenge or planning for the future,
            our team is ready to help you explore your options.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block bg-antique-gold px-8 py-4 text-sm font-semibold text-midnight transition-colors hover:bg-white"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <AttorneyModal
        attorney={selectedAttorney}
        onClose={() => setSelectedAttorney(null)}
      />
    </>
  );
}

export default Attorneys;
