import { SearchType } from "@/models";

const headerOptions = {
    headers: {
        Authorization: `token ${process.env.API_TOKEN}`
    },
    next: {
        revalidate: 15,
    },
};

const httpClient = async (url: string) => {
    try {
        const res = await fetch(url, headerOptions);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return await res.json();
    } catch (err) {
        throw new Error((err as { message: string }).message || 'Something went wrong');
    }
};
export const buildQuery = (query: string, page: number, pageSize: number, searchType: SearchType) =>
  `https://api.github.com/search/${searchType}?q=${query}&page=${page}&per_page=${pageSize}`;

export default httpClient;
