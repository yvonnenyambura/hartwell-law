import { firm, office } from "../data/content"

function Footer() {
  return (
    <footer className="bg-midnight px-6 py-10 text-white md:px-8 md:py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">

        {/* Firm Information */}
        <div>
          <h2 className="font-heading text-2xl">
            {firm.name}
          </h2>

          <p className="mt-3 max-w-xs text-sm leading-7 text-gray-300">
            Trusted Counsel. Thoughtful Representation.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 font-heading text-lg text-antique-gold">
            Contact
          </h3>

          <p className="text-sm text-gray-300">{firm.phone}</p>
          <p className="mt-2 text-sm text-gray-300">{firm.email}</p>

          <p className="mt-2 text-sm leading-6 text-gray-300">
            {office.address}, {office.city}, {office.state} {office.zip}
          </p>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="mb-3 font-heading text-lg text-antique-gold">
            Office Hours
          </h3>

          {office.hours.map((hour) => (
            <p key={hour} className="mb-2 text-sm text-gray-300">
              {hour}
            </p>
          ))}
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/20 pt-5 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {firm.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer