import { FlatList } from 'react-native';
import { UserCardComponent } from '../UserCardComponent/UserCardComponent';
import { GithubUsers } from '../../../infrastructure/interfaces/githubApiUser.interface';

interface Props {
  value: GithubUsers[];
}

export const UserListComponent = ({value}: Props) => {
  return(
    <FlatList
      data={value}
      renderItem={({item}) => <UserCardComponent user={item} />}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
}
