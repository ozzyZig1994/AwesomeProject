import { useEffect, useState } from 'react';
import { GithubUserRepos } from '../../infrastructure/interfaces/githunApiRepo.interface';
import { githubApi } from '../../config/api/githubApi';

export const useGetGithubUserRepos = (user: string) => {
  const [ gitHubUserReposList, setGitHubUserRepoList ] = useState([] as GithubUserRepos[]);
  const [ search, setSearch ] = useState('');

  /**
   * Method that performs the search and filters the results depending on 
   * the value entered.
   * @param data 
   */
  const debouncing = (data: GithubUserRepos[]) => {
    setGitHubUserRepoList(search 
      ? data.filter(value => value.name === search || value.name.startsWith(search)) 
      : data);
  }

  const handleOnChangeText = (value: string) => setSearch(value);

  useEffect(() => {
    githubApi(`users/${user}/repos`)
    .then(data => debouncing(data));
  }, [search]);
    
  return {
    gitHubUserReposList,
    search,
    handleOnChangeText
  } 
}