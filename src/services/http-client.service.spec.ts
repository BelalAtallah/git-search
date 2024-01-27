import httpClient, { buildQuery } from './http-client.service';

// Mocking fetch and process.env
process.env.API_TOKEN = 'dummy_token';
global.fetch = jest.fn();

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('httpClientService', () => {

    const mockResponse = (ok: boolean, jsonBody: any) => {
        return {
            ok,
            json: () => Promise.resolve(jsonBody),
        } as Response;
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (fetch as jest.Mock).mockClear();
    });

    it('should handle successful API request', async () => {
        const testData = { data: 'test' };
        (fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve(mockResponse(true, testData)));

        const url = 'https://api.github.com/test';
        const response = await httpClient(url);

        expect(fetch).toHaveBeenCalledWith(url, expect.any(Object));
        expect(response).toEqual(testData);
    });

    it('should throw error for non-ok response', async () => {
        (fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve(mockResponse(false, {})));

        const url = 'https://api.github.com/test';
        await expect(httpClient(url)).rejects.toThrow('Network response was not ok');
    });

    it('should handle network errors', async () => {
        mockedFetch.mockRejectedValueOnce(new Error('Network error'));

        const url = 'https://api.github.com/test';
        await expect(httpClient(url)).rejects.toThrow('Network error');
    });

    it('should correctly construct search query URLs', () => {
        const query = 'test';
        const page = 1;
        const pageSize = 10;
        const searchType = 'repositories';

        const expectedUrl = `https://api.github.com/search/${searchType}?q=${query}&page=${page}&per_page=${pageSize}`;
        expect(buildQuery(query, page, pageSize, searchType)).toEqual(expectedUrl);
    });
});
