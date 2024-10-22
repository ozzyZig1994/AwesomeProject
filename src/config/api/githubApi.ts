const BASE_URL = 'https://api.github.com/';

export const githubApi = (url: string) => fetch(BASE_URL+`${url}`).then(response => response.json());
