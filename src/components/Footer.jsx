
import { firm, office } from "../data/content"

function Footer() {
  return (
    <footer className="bg-midnight px-8 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">

        <div>
          <h2 className="font-heading text-2xl">
            {firm.name}
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-7 text-gray-300">
            Trusted Counsel. Thoughtful Representation.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-antique-gold">
            Contact
          </h3>
          <p className="text-sm text-gray-300">{firm.phone}</p>
          <p className="mt-2 text-sm text-gray-300">{firm.email}</p>
          <p className="mt-2 text-sm text-gray-300">
            {office.address}, {office.city}, {office.state} {office.zip}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-antique-gold">
            Office Hours
          </h3>
          {office.hours.map((hour) => (
            <p key={hour} className="mb-2 text-sm text-gray-300">
              {hour}
            </p>
          ))}
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {firm.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Fictional website concept created for portfolio demonstration purposes.
        </p>
      </div>
    </footer>
  )
}

export default Footer
