"use client";
import { SearchForm } from "@/components/features/search-form";
import { SearchResult } from "@/components/features/search-result";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SearchEmptyState } from "@/components/features/search-result/components/search-empty-state";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "@/slices/search-slice";
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";

const Search = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch<AppDispatch>();
  const searchType = useSelector((state: RootState) => state.search.type);

  useEffect(() => {
    if (!searchValue) return;
    dispatch(
      fetchSearchResults({
        searchValue,
        searchType,
        pageNumber: 1,
        pageSize: 10,
      })
    );
  }, [dispatch, searchType, searchValue]);

  return (
    <div className="items-center flex justify-center gap-4 flex-wrap p-4 text-black rounded-md w-full mx-20 flex-col bg-[#66667329] mt-3">
      <div className="flex border-b w-full mt-4 pb-2 justify-center">
        <SearchForm />
      </div>
      {!searchValue?.length ? <SearchEmptyState /> : <SearchResult />}
    </div>
  );
};
export default Search;
