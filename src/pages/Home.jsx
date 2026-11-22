
import {
  UserRound,
  MessageCircle,
  Scale,
  ShieldCheck,
  HeartHandshake,
  FileText,
  Building2,
} from "lucide-react"
import { attorneys, testimonials, faqs } from "../data/content"
import AttorneyCard from "../components/AttorneyCard"
import FAQ from "../components/FAQ"
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              CHARLOTTE, NORTH CAROLINA
            </p>

            <h1 className="font-heading text-3xl leading-tight text-midnight md:text-5xl">
              Trusted Counsel.
              <span className="block">Thoughtful Representation.</span>
            </h1>

            <p className="mt-5 max-w-xl font-body text-base leading-8 text-slate">
              Dedicated legal guidance for individuals, families and businesses.
              We bring clarity, experience and a personal approach to every matter.
            </p>

            <Link
  to="/contact"
  className="mt-7 inline-block bg-midnight px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-antique-gold"
>
  Schedule a Consultation
</Link>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="/images/hero.png"
              alt="Hartwell Law PLLC reception"
              className="block h-auto max-h-[520px] w-full object-contain object-left"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="border-t border-antique-gold/20 bg-[#EFEAE0] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              HOW WE CAN HELP
            </p>

            <h2 className="font-heading text-3xl text-midnight md:text-4xl">
              Legal Services Tailored to Your Needs
            </h2>

            <p className="mt-4 text-base leading-8 text-slate">
              We provide thoughtful legal guidance across a range of matters,
              helping individuals, families and businesses navigate important decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <div className="border border-antique-gold/20 bg-white p-5 transition-shadow hover:shadow-lg lg:p-6">
              <HeartHandshake className="mb-6 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-xl text-midnight">
                Personal Injury
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Helping individuals pursue compensation after accidents and injuries.
              </p>
              <a href="/practice-areas" className="mt-6 inline-block text-sm font-semibold text-midnight hover:text-antique-gold">
                Learn More →
              </a>
            </div>

            <div className="border border-antique-gold/20 bg-white p-5 transition-shadow hover:shadow-lg lg:p-6">
              <UserRound className="mb-6 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-xl text-midnight">
                Family Law
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Providing guidance through divorce, custody and other family matters.
              </p>
              <a href="/practice-areas" className="mt-6 inline-block text-sm font-semibold text-midnight hover:text-antique-gold">
                Learn More →
              </a>
            </div>

            <div className="border border-antique-gold/20 bg-white p-5 transition-shadow hover:shadow-lg lg:p-6">
              <FileText className="mb-6 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-xl text-midnight">
                Estate Planning
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Helping families protect their assets and plan for the future.
              </p>
              <a href="/practice-areas" className="mt-6 inline-block text-sm font-semibold text-midnight hover:text-antique-gold">
                Learn More →
              </a>
            </div>

            <div className="border border-antique-gold/20 bg-white p-5 transition-shadow hover:shadow-lg lg:p-6">
              <Building2 className="mb-6 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-xl text-midnight">
                Business Law
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Supporting businesses with contracts, legal agreements and commercial matters.
              </p>
              <a href="/practice-areas" className="mt-6 inline-block text-sm font-semibold text-midnight hover:text-antique-gold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-antique-gold/30 bg-ivory px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              THE HARTWELL DIFFERENCE
            </p>

            <h2 className="font-heading text-3xl text-midnight md:text-4xl">
              Why Clients Choose Hartwell Law
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate">
              We believe effective legal representation begins with understanding
              our clients, communicating clearly and approaching every matter
              with care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-6">
            <div className="text-center">
              <UserRound className="mx-auto mb-4 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-lg text-midnight">
                Client-Focused
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                Personal attention to every matter.
              </p>
            </div>

            <div className="text-center">
              <MessageCircle className="mx-auto mb-4 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-lg text-midnight">
                Clear Communication
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                Straightforward legal guidance.
              </p>
            </div>

            <div className="text-center">
              <Scale className="mx-auto mb-4 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-lg text-midnight">
                Thoughtful Counsel
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                Careful consideration of your needs.
              </p>
            </div>

            <div className="text-center">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-antique-gold" />
              <h3 className="font-heading text-lg text-midnight">
                Professional Integrity
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                A commitment to ethical representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys Section */}
      <section className="border-y border-antique-gold/20 bg-[#EFEAE0] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              MEET OUR TEAM
            </p>

            <h2 className="font-heading text-3xl text-midnight md:text-4xl">
              Experienced Guidance. Personal Attention.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate">
              Get to know the attorneys committed to providing thoughtful
              guidance and attentive representation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
            {attorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/attorneys"
              className="inline-block border border-midnight px-7 py-3 text-sm font-medium text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Meet All Attorneys
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<section className="bg-[#E8DFD0] px-6 py-12 md:px-12 md:py-16">
  <div className="mx-auto max-w-7xl">
    <div className="mb-8 max-w-2xl">
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
        CLIENT EXPERIENCES
      </p>

      <h2 className="font-heading text-3xl text-midnight md:text-4xl">
        What Our Clients Say
      </h2>

      <p className="mt-4 text-base leading-8 text-slate">
        The quality of our work is reflected in the experiences of those we serve.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex h-full flex-col border border-antique-gold/20 bg-white p-5 lg:p-6"
        >
          <MessageCircle className="mb-5 h-7 w-7 shrink-0 text-antique-gold" />

          <p className="flex-1 text-sm leading-7 text-slate">
            "{testimonial.text}"
          </p>

          <div className="mt-6 border-t border-antique-gold/20 pt-4">
            <h3 className="font-heading text-base text-midnight">
              {testimonial.name}
            </h3>

            <p className="mt-1 text-xs text-antique-gold">
              {testimonial.service}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* FAQ Section */}
      <section className="bg-ivory px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
              COMMON QUESTIONS
            </p>

            <h2 className="font-heading text-3xl text-midnight md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 max-w-md text-base leading-8 text-slate">
              Find answers to common questions about our legal services
              and what to expect when working with our firm.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-block bg-midnight px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-antique-gold"
            >
              Have More Questions?
            </a>
          </div>

          <div>
            {faqs.map((faq) => (
              <FAQ key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-y border-antique-gold/30 bg-[#E8DFD0] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-antique-gold">
            LET'S DISCUSS YOUR LEGAL NEEDS
          </p>

          <h2 className="font-heading text-3xl leading-tight text-midnight md:text-5xl">
            The Right Guidance Can Make a Difference.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate">
            Whether you're facing a personal legal matter or making important
            business decisions, we're here to help you understand your options.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block bg-antique-gold px-8 py-4 text-sm font-semibold text-midnight transition-colors hover:bg-midnight hover:text-white"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
