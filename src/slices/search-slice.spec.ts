import { SearchState } from '@/models';
import searchReducer, { setSearchType, setSearchValue, fetchSearchResults, initialState } from './search-slice';
import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction, configureStore } from '@reduxjs/toolkit';

jest.mock('@/services/http-client.service', () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue({
        total_count: 1,
        items: [{}]
    }),
    httpClient: jest.fn().mockResolvedValue({
        total_count: 1,
        items: [{}]
    }),
    buildQuery: jest.fn()
}));

describe('searchSlice', () => {
    it('should return the initial state', () => {
        expect(searchReducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('should handle setSearchType', () => {
        const previousState = initialState;
        expect(searchReducer(previousState, setSearchType({ type: 'repositories' }))).toEqual({
            ...previousState,
            type: 'repositories',
            userResults: [],
            repoResults: [],
            pagination: { ...previousState.pagination, pageNumber: 1, total: 0 }
        });
    });

    it('should handle setSearchValue', () => {
        const previousState = initialState;
        expect(searchReducer(previousState, setSearchValue({ value: 'test' }))).toEqual({
            ...previousState,
            value: 'test',
            userResults: [],
            repoResults: [],
            pagination: { ...previousState.pagination, pageNumber: 1, total: 0 }
        });
    });

    // Async thunk tests
    describe('fetchSearchResults', () => {
        let store: EnhancedStore<{ search: SearchState; }, UnknownAction, Tuple<[StoreEnhancer<{ dispatch: ThunkDispatch<{ search: SearchState; }, undefined, UnknownAction>; }>, StoreEnhancer]>>;

        beforeEach(() => {
            store = configureStore({ reducer: { search: searchReducer } });
        });

        it('should handle initial fetchSearchResults', async () => {
            // Mock the httpClient here
            const action = await store.dispatch(fetchSearchResults({
                searchValue: 'test',
                searchType: 'users',
                pageNumber: 1,
                pageSize: 10
            }));

            expect(action.type).toBe('search/fetchResults/fulfilled');
            expect(store.getState().search.loading).toBe(false);
        });
    });
});