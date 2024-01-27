interface IRepositoryStats {
  label: string;
  value: number;
}
export const RepositoryStats:React.FC<{statistics: IRepositoryStats[]}> = ({statistics}) => {
  return (
    <div className="bg-slate-800 rounded flex justify-between px-4 py-4">
      {statistics.map((stat, index) => (
        <div key={index} className="text-center text-white">
          <label className="text-gray-400">{stat.label}</label>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};
