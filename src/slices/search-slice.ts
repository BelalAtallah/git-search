import { FetchSearchResultsArg, SearchState, SearchType } from '@/models';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import httpClient, { buildQuery } from '@/services/http-client.service';

export const fetchSearchResults = createAsyncThunk(
    'search/fetchResults',
    async ({ searchValue, searchType, pageNumber, pageSize }: FetchSearchResultsArg, { rejectWithValue }) => {
        try {
            const response = await httpClient(buildQuery(searchValue, pageNumber, pageSize, searchType));
            return response;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const initialState: SearchState = {
    type: 'users',
    value: '',
    loading: false,
    error: null,
    userResults: [],
    repoResults: [],
    pagination: {
        pageNumber: 1,
        pageSize: 10,
        total: 0
    },
};
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchType: (state, action: PayloadAction<{ type: SearchType }>) => {
            state.type = action.payload.type;
            state.userResults = [];
            state.repoResults = [];
            state.pagination.pageNumber = 1
            state.pagination.total = 0
        },
        setSearchValue: (state, action: PayloadAction<{ value: string }>) => {
            state.value = action.payload.value;
            state.userResults = [];
            state.repoResults = [];
            state.pagination.pageNumber = 1
            state.pagination.total = 0
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.loading = false;
                state.pagination.total = action.payload.total_count;
                if (state.type === 'users') {
                    state.userResults = [...state.userResults, ...action.payload.items];

                } else if (state.type === 'repositories') {
                    state.repoResults = [...state.repoResults, ...action.payload.items];
                }
                state.pagination.pageNumber += 1;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setSearchType, setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;