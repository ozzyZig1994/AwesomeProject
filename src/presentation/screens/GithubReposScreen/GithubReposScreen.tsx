import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SearchbarComponent } from '../../components/SearchbarComponent/SearchbarComponent';
import { useGetGithubUserRepos } from '../../hooks/useGetGithubUserRepos';
import { RepoListComponent } from '../../components/RepoListComponent/RepoListComponen';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../infrastructure/navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'GithubReposScreen'> {}

export const GithubReposScreen = ({navigation, route}: Props) => {
  const { login, avatar } = route.params;
  const { gitHubUserReposList, search, handleOnChangeText } = useGetGithubUserRepos(login)
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userImage}
          source={{
            uri: avatar,
          }}
        />
        <View>
          <Text style={styles.searchInputText}>Search for a GitHub Repo</Text>
          <Text style={styles.listText}> GitHub User's Repo List 👇</Text>
        </View>
      </View>
      {/**
       * Component in charge of rendering existing repos
       */}
      <RepoListComponent value={gitHubUserReposList} />
      {/**
       * Component in charge of obtaining the name of the 
       * repository to search for or repositories that match 
       * the value entered.
       */}
      <SearchbarComponent value={search} onChange={handleOnChangeText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor:'#1321cf',
    justifyContent: 'space-evenly',
    alignItems:'center',
    flexDirection: 'row'
  },
  searchInputText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  listText: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 45,
  }
});