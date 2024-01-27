import { useCallback, useEffect, useState, RefObject, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchSearchResults } from '@/slices/search-slice';

const useVirtualScrollPagination = (scrollRef: RefObject<HTMLDivElement>) => {
    const dispatch = useDispatch<AppDispatch>();
    const searchValue = useSelector((state: RootState) => state.search.value);
    const searchType = useSelector((state: RootState) => state.search.type);
    const pagination = useSelector((state: RootState) => state.search.pagination);
    const repositories = useSelector(
        (state: RootState) => state.search.repoResults
    );
    const users = useSelector((state: RootState) => state.search.userResults);

    const [isLoading, setIsLoading] = useState(false);

    const canLoadMore = useMemo(() => {
        if (isLoading || !searchValue) return false;
        if (searchType === 'repositories' && repositories.length >= pagination.total) return false;
        if (searchType === 'users' && users.length >= pagination.total) return false;
        return true;
    }, [isLoading, searchValue, searchType, pagination, repositories, users]);


    const loadMore = useCallback(() => {
        if (!canLoadMore) return;
        setIsLoading(true);
        dispatch(fetchSearchResults({
            searchValue,
            searchType,
            pageNumber: pagination.pageNumber,
            pageSize: pagination.pageSize
        })).finally(() => {
            setIsLoading(false);
        });
    }, [canLoadMore, dispatch, pagination, searchType, searchValue]);


    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            if (scrollTop + clientHeight >= scrollHeight) {
                loadMore();
            }
        };

        const scrollElement = scrollRef.current;
        scrollElement?.addEventListener('scroll', handleScroll);
        return () => scrollElement?.removeEventListener('scroll', handleScroll);
    }, [loadMore, scrollRef]);

    return { isLoading };
};

export default useVirtualScrollPagination;
