function InterestsCard({
  title,
  text,
  isDark
}) {
  return (
    <div className={`rounded-xl p-6 hover:scale-[1.02] transition-all ${isDark
      ? 'bg-secondary border border-slate-700'
      : 'bg-white border border-slate-200 shadow-sm'
      }`}>
      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-primary' : 'text-sky-700'
        }`}>
        {title}
      </h3>
      <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
        {text}
      </p>
    </div>
  );
}

export default InterestsCard;