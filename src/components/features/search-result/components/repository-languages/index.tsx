export const RepositoryLanguages = ({ languages }: { languages: string[] }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-400 mb-2">Languages</label>
      <div className="flex gap-2 flex-wrap">
        {languages.map((lang, i) => (
          <p
            key={i}
            className="border border-gray-200 rounded-md px-1 text-white"
          >
            {lang}
          </p>
        ))}
      </div>
    </div>
  );
};
