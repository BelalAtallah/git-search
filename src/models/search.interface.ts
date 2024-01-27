export type SearchType = 'users' | 'repositories';

export interface IUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    node_id: string;
}

export interface IRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    forks_url: string;
    language: string;
    languages_url: string;
    topics: string[];
    owner: IUser;
    created_at: string;
    stargazers_count: number;
    open_issues_count: number;
    watchers_count: number;
    forks_count: number;
}

export interface IFork extends IUser {
    repo_link: string;
}

export interface FetchSearchResultsArg {
    searchValue: string;
    searchType: SearchType;
    pageNumber: number,
    pageSize: number
}

export interface SearchState {
    type: SearchType;
    value: string;
    loading: boolean;
    error: unknown;
    userResults: IUser[];
    repoResults: IRepository[];
    pagination: {
        pageNumber: number;
        pageSize: number;
        total: number;
    };
}