
function AttorneyCard({ attorney }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden border border-antique-gold/20 bg-white">
      <div className="h-48 w-full shrink-0 overflow-hidden sm:h-64 lg:h-80">
        <img
          src={attorney.image}
          alt={attorney.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <h3 className="font-heading text-base text-midnight sm:text-xl">
          {attorney.name}
        </h3>

        <p className="mt-2 text-xs font-medium text-antique-gold sm:text-sm">
          {attorney.role}
        </p>

        <p className="mt-3 text-xs text-slate sm:text-sm">
          {attorney.focus}
        </p>
      </div>
    </div>
  );
}

export default AttorneyCard;
