export interface GithubUserRepo {
    id:                          number;
    name:                        string;
    full_name:                   string;
    description:                 null | string;
    url:                         string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    stargazers_count:            number;
    watchers_count:              number;
    forks_count:                 number;
    language:                    null | string;
}
