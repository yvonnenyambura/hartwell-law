
import { useState } from "react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between border-b border-gray-200 bg-ivory px-4 py-5 md:px-8">

      <button
        className="text-2xl text-midnight md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      <h2 className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-lg text-midnight md:static md:translate-x-0 md:text-2xl">
        Hartwell Law LLP
      </h2>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute left-0 top-full z-10 w-full flex-col gap-6 border-b border-gray-200 bg-ivory px-6 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
      >
        <a href="/" onClick={() => setIsMenuOpen(false)} className="font-body text-sm text-slate transition-colors hover:text-antique-gold">
          Home
        </a>

        <a href="/practice-areas" onClick={() => setIsMenuOpen(false)} className="font-body text-sm text-slate transition-colors hover:text-antique-gold">
          Practice Areas
        </a>

        <a href="/attorneys" onClick={() => setIsMenuOpen(false)} className="font-body text-sm text-slate transition-colors hover:text-antique-gold">
          Attorneys
        </a>

        <a href="/contact" onClick={() => setIsMenuOpen(false)} className="font-body text-sm text-slate transition-colors hover:text-antique-gold">
          Contact
        </a>

        <a
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="bg-midnight px-5 py-3 text-center text-sm text-white transition-colors hover:bg-antique-gold"
        >
          Free Consultation
        </a>
      </nav>

      <a
        href="/contact"
        className="bg-midnight px-3 py-2 text-xs text-white transition-colors hover:bg-antique-gold md:hidden"
      >
        Consultation
      </a>

    </header>
  )
}

export default Navbar
