import { useEffect, useRef } from "react";
import useVirtualScrollPagination from "@/hooks/useVirtualScrollPagination";
import { Loader } from "@/components/shared/loader";
import { SearchResultList } from "./components/search-result-list";
import useSearchSelector from "./hooks/useSearchSelector";
export const SearchResult = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useVirtualScrollPagination(scrollContainerRef);
  const { pagination, isApiLoading } = useSearchSelector();

  return (
    <div
      ref={scrollContainerRef}
      className="h-[calc(100vh-220px)] overflow-y-auto 2xl:px-60"
    >
      {isApiLoading && !isLoading && (
        <div className="flex h-full items-center">
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
