import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { RootState } from '@/store/store';

const selectSearchValue = (state: RootState) => state.search.value;
const selectSearchType = (state: RootState) => state.search.type;
const selectRepositories = (state: RootState) => state.search.repoResults;
const selectUsers = (state: RootState) => state.search.userResults;
const selectPagination = (state: RootState) => state.search.pagination;
const selectIsLoading = (state: RootState) => state.search.loading;
const selectError = (state: RootState) => state.search.error;

const useSearchSelector = () => {
  const selector = useMemo(() => (state: RootState) => ({
    searchValue: selectSearchValue(state),
    searchType: selectSearchType(state),
    repositories: selectRepositories(state),
    users: selectUsers(state),
    pagination: selectPagination(state),
    isApiLoading: selectIsLoading(state),
    error: selectError(state)
  }), []);

  return useSelector(selector);
};

export default useSearchSelector;
