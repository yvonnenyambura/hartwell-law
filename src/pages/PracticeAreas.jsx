import { practiceAreas } from "../data/content";

function PracticeAreas() {
    return(
        <>
        <section className="bg-midnight px-6 py-20 md:px-12 md:py-28">
  <div className="mx-auto max-w-4xl text-center">

    <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
      HOW WE CAN HELP
    </p>

    <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
      Our Practice Areas
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300">
      Every legal matter deserves careful attention and thoughtful guidance.
      Explore our practice areas to learn how Hartwell Law can assist you.
    </p>

  </div>
</section>

{/* Practice Areas */}
<section className="bg-[#EFEAE0] px-6 py-16 md:px-12 md:py-24">

  <div className="mx-auto max-w-7xl">

    <div className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-antique-gold">
        OUR LEGAL SERVICES
      </p>

      <h2 className="font-heading text-3xl text-midnight md:text-4xl">
        Areas of Practice
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate">
        We provide guidance across a range of legal matters, with an approach
        built around understanding your needs.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">

      {practiceAreas.map((area) => (
        <div
  key={area.id}
  className="overflow-hidden border border-antique-gold/20 bg-white"
>
  <img
    src={area.image}
    alt={area.title}
   className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
  />

  <div className="p-8 md:p-10">
    <h3 className="font-heading text-2xl text-midnight">
      {area.title}
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate">
      {area.description}
    </p>
  </div>
</div>
      ))}

    </div>

  </div>
</section>

<section className="bg-ivory px-6 py-16 md:px-12 md:py-20">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-antique-gold">
      OUR APPROACH
    </p>

    <h2 className="font-heading text-3xl leading-tight text-midnight md:text-4xl">
      Legal Guidance Built Around You
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate">
      Every client and every legal matter is different. We take the time to
      understand your circumstances, explain your options clearly, and provide
      thoughtful guidance at every stage.
    </p>
  </div>
</section>

<section className="border-y border-antique-gold/30 bg-[#E8DFD0] px-6 py-14 md:px-12 md:py-16">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

    {/* CTA Text */}
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
        LET'S DISCUSS YOUR LEGAL NEEDS
      </p>

      <h2 className="font-heading text-3xl leading-tight text-midnight md:text-4xl">
        The Right Guidance Can Make a Difference.
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-slate">
        Whether you're facing a personal legal matter or making important
        business decisions, we're here to help you understand your options.
      </p>
    </div>

    {/* CTA Action */}
    <div className="flex shrink-0 flex-col items-center gap-4 md:items-start">
      <a
        href="/contact"
        className="bg-midnight px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-antique-gold hover:text-midnight"
      >
        Schedule a Consultation
      </a>

      <p className="text-xs text-slate">
        Let's take the next step together.
      </p>
    </div>

  </div>
</section>
        </>
    )
}

export default PracticeAreas