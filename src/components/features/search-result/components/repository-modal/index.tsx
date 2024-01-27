import { IFork, IRepository } from "@/models";
import Image from "next/image";
import { RepositoryStats } from "../repository-stats";
import { RepositoryLanguages } from "../repository-languages";
import { RepositoryForks } from "../repository-forks";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
export const RepositoryModal = ({
  owner,
  full_name,
  created_at,
  description,
  watchers_count,
  open_issues_count,
  stargazers_count,
  forks,
  languages,
}: IRepository & { forks: IFork[]; languages: string[] }) => {
  const statistics = [
    { value: stargazers_count, label: "Stars" },
    { value: open_issues_count, label: "Issues" },
    { label: "Watchers", value: watchers_count },
  ];
  return (
    <div className="bg-slate-700 p-2 px-0 rounded-md flex overflow-y-auto flex-col gap-4 w-full m-2">
      <div className="flex justify-between flex-wrap gap-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          {owner && (
            <Image
              src={owner?.avatar_url}
              alt={`Repository ${full_name} logo`}
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
          <div>
            <p className="text-white text-lg break-words">{full_name}</p>
            <a href={owner?.html_url} className="text-blue-500">
              @{owner?.login}
            </a>
          </div>
        </div>
        <div className="self-center">
          <p className="text-white"> Created {formatDate(created_at)}</p>
        </div>
      </div>
      <div className="text-gray-400 max-h-16 md:overflow-y-auto ">
        {description?.length > 0 ? description : "This repo has no description"}
      </div>

      <RepositoryStats statistics={statistics} />

      {languages?.length > 0 && <RepositoryLanguages languages={languages} />}

      {forks?.length > 0 && <RepositoryForks forks={forks} />}
    </div>
  );
};
