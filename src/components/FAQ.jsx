import { useState } from "react"
import { Plus, Minus } from "lucide-react"

function FAQ({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-antique-gold/30 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-midnight">
          {faq.question}
        </span>

        {isOpen ? (
          <Minus className="h-5 w-5 shrink-0 text-antique-gold" />
        ) : (
          <Plus className="h-5 w-5 shrink-0 text-antique-gold" />
        )}
      </button>

      {isOpen && (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate">
          {faq.answer}
        </p>
      )}
    </div>
  )
}

export default FAQ