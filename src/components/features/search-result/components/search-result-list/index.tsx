import { IRepository, IUser } from "@/models";
import { useState } from "react";
import { RepositoryCard } from "../repository-card";
import { UserCard } from "../user-card";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useModal from "@/hooks/useModal";
import Modal from "@/components/shared/modal";
import { AnimatePresence } from "framer-motion";
import { RepositoryModal } from "../repository-modal";
import useRepositoryDetails from "../../hooks/useRepositoryDetails";

export const SearchResultList = () => {
  const { repoResults: repositories, userResults: users } = useSelector(
    (state: RootState) => state.search
  );
  const { modalOpen, close, open } = useModal();
  const [selectedRepository, setSelectedRepository] = useState<IRepository>();
  const { languages, forks, fetchRepositoryDetails, isLoading, error } =
    useRepositoryDetails();

  const handleViewMore = (repo: IRepository) => {
    open();
    fetchRepositoryDetails(repo);
    setSelectedRepository(repo);
  };

  const handleCloseModal = () => {
    close();
  };

  return (
    <div className="flex flex-wrap xl:gap-x-6 gap-x-0 sm:p-5 gap-y-2 pt-0 md:justify-center">
      <RepositoryList
        repositories={repositories}
        handleViewMore={handleViewMore}
      />
      <UsersList users={users} />
      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen && selectedRepository && (
          <Modal handleClose={handleCloseModal}>
            <RepositoryModal
              {...selectedRepository}
              languages={languages}
              forks={forks}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

const RepositoryList = ({
  repositories,
  handleViewMore,
}: {
  repositories: IRepository[];
  handleViewMore: (repo: IRepository) => void;
}) => {
  return (
    <>
      {repositories?.map((e) => (
        <div
          className="text-white 2xl:basis-1/5 xl:basis-1/3 md:basis-1/2 basis-full flex justify-center"
          key={e.id}
        >
          <RepositoryCard {...e} handleViewMore={handleViewMore} />
        </div>
      ))}
    </>
  );
};

const UsersList = ({ users }: { users: IUser[] }) => {
  return (
    <>
      {users?.map((e) => (
        <div
          className="text-white 2xl:basis-1/5 xl:basis-1/3 md:basis-1/2 basis-full flex justify-center"
          key={e.id}
        >
          <UserCard {...e} />
        </div>
      ))}
    </>
  );
};
