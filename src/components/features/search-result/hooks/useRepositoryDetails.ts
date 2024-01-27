import { useState, useCallback } from 'react';
import { IFork, IRepository } from "@/models";
import httpClient from "@/services/http-client.service";

const useRepositoryDetails = () => {
    const [languages, setLanguages] = useState<string[]>([]);
    const [forks, setForks] = useState<IFork[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLanguages = async (url: string) => {
        try {
            const res = await httpClient(url);
            setLanguages(Object.keys(res));
        } catch (err) {
            setError('Failed to fetch languages');
        }
    };

    const fetchForks = async (url: string) => {
        try {
            const res: IRepository[] = await httpClient(url + '?per_page=3&sort=newest');
            setForks(res.map(e => ({ ...e.owner, repo_link: e.html_url })));
        } catch (err) {
            setError('Failed to fetch forks');
        }
    };

    const fetchRepositoryDetails = useCallback(async (repo: IRepository) => {
        setIsLoading(true);
        setError(null);
        setLanguages([]);
        setForks([]);

        await Promise.all([
            repo.languages_url && fetchLanguages(repo.languages_url),
            repo.forks_count > 0 && fetchForks(repo.forks_url)
        ]);

        setIsLoading(false);
    }, []);

    return {
        languages,
        forks,
        isLoading,
        error,
        fetchRepositoryDetails
    };
};

export default useRepositoryDetails;
