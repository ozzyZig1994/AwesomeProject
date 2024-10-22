import { FlatList } from 'react-native';
import { RepoCardComponent } from '../RepoCardComponent/RepoCardComponent';
import { GithubUserRepos } from '../../../infrastructure/interfaces/githunApiRepo.interface';

interface Props {
  value: GithubUserRepos[];
}

export const RepoListComponent = ({value}: Props) => {
  return (
    <FlatList
      data={value}
      renderItem={({item}) => <RepoCardComponent repos={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}
