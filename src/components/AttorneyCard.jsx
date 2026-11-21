function AttorneyCard({ attorney }) {
  return (
    <div className="group overflow-hidden border border-antique-gold/20 bg-white">
      <div className="overflow-hidden">
        <img
          src={attorney.image}
          alt={attorney.name}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl text-midnight">
          {attorney.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-antique-gold">
          {attorney.role}
        </p>

        <p className="mt-3 text-sm text-slate">
          {attorney.focus}
        </p>
      </div>
    </div>
  )
}

export default AttorneyCard