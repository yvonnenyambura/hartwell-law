
import { X } from "lucide-react";

function AttorneyModal({ attorney, onClose }) {
  if (!attorney) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden bg-ivory md:grid-cols-[0.85fr_1.15fr]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-white text-midnight transition-colors hover:bg-antique-gold"
          aria-label="Close profile"
        >
          <X size={20} />
        </button>

        {/* Attorney Image */}
        <div className="h-80 md:h-[520px]">
          <img
            src={attorney.image}
            alt={attorney.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Attorney Details */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-antique-gold">
            {attorney.role}
          </p>

          <h2 className="font-heading text-3xl text-midnight">
            {attorney.name}
          </h2>

          <p className="mt-4 text-sm font-medium text-antique-gold">
            {attorney.experience}
          </p>

          <div className="my-6 h-px bg-antique-gold/30" />

          <p className="text-sm leading-8 text-slate">
            {attorney.bio}
          </p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-midnight">
            Areas of Focus
          </p>

          <p className="mt-2 text-sm leading-7 text-slate">
            {attorney.focus}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AttorneyModal;
