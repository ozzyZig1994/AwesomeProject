import { useEffect, useState } from 'react';
import { GithubUsers } from '../../infrastructure/interfaces/githubApiUser.interface';
import { githubApi } from '../../config/api/githubApi';

export const useGetGithubUsers = () => {
  const [ gitHubUserList, setGitHubUserList ] = useState([] as GithubUsers[]);
  const [ search, setSearch ] = useState('');

  /**
   * Method that performs the search and filters the results depending on 
   * the value entered.
   * @param data 
   */
  const debouncing = (data: GithubUsers[]) => {
    setGitHubUserList(search 
      ? data.filter(value => value.login === search || value.login.startsWith(search)) 
      : data);
  }

  const handleOnChangeText = (value: string) => setSearch(value);

  useEffect(() => {
    githubApi('users')
    .then(data => debouncing(data));
  }, [search]);
    
  return {
    gitHubUserList,
    search,
    handleOnChangeText
  }
}
