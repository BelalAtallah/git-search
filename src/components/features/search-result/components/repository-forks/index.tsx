import { IFork } from "@/models";
import Image from "next/image";

export const RepositoryForks: React.FC<{ forks: IFork[] }> = ({ forks }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-400 mb-2">Forks</label>
      <div className="flex gap-4 flex-wrap max-h-24 overflow-y-auto">
        {forks.map((fork) => (
          <a
            key={fork.id}
            href={fork.repo_link}
            data-testid={`fork-link-${fork.id}`}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            <Image
              src={fork.avatar_url}
              alt={`Repository ${fork.login} logo`}
              width={50}
              height={50}
              className="rounded-full"
            />
            <label className="">{fork.login}</label>
          </a>
        ))}
      </div>
    </div>
  );
};
