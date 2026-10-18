function InterestsCard({
  title,
  text
}) {
  return (
    <div className={'rounded-xl p-6 hover:scale-[1.02] transition-all bg-secondary'}>
      <h3 className={'text-xl font-semibold mb-2 text-primary'}>
        {title}
      </h3>
      <p className={'text-text-primary'}>
        {text}
      </p>
    </div>
  );
}

export default InterestsCard;