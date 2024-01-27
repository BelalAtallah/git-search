import { useRef } from "react";
import useVirtualScrollPagination from "@/hooks/useVirtualScrollPagination";
import { Loader } from "@/components/shared/loader";
import { SearchResultList } from "./components/search-result-list";
import useSearchSelector from "./hooks/useSearchSelector";
export const SearchResult = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useVirtualScrollPagination(scrollContainerRef);
  const { pagination, isApiLoading, error } = useSearchSelector();

  if (error) {
    return (
      <div className="text-red-600">
        <p>🔴 Something went wrong! 🔴</p>
        <p>{error as string}</p>
        <p>Please Try again later</p>
      </div>
    );
  }
  return (
    <div
      ref={scrollContainerRef}
      className="h-[calc(100vh-220px)] overflow-y-auto 2xl:px-60"
    >
      {isApiLoading && !isLoading && (
        <div className="flex h-full items-center w-full justify-center min-w-40">
          <Loader />
        </div>
      )}
      {(!isApiLoading || isLoading) && (
        <>
          <div className="w-full">
            <p className="text-white">{pagination?.total} Records found!</p>
          </div>
          <SearchResultList />
          {isLoading && (
            <div className="text-center text-white">
              Loading more results...
            </div>
          )}
        </>
      )}
    </div>
  );
};
