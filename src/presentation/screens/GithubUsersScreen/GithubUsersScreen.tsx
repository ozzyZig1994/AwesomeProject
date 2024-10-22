
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UserListComponent } from '../../components/UserListComponent/UserListComponent';
import { SearchbarComponent } from '../../components/SearchbarComponent/SearchbarComponent';
import { useGetGithubUsers } from '../../hooks/useGetGithubUsers';

export const GithubUsersScreen = () => {
  const { gitHubUserList, search, handleOnChangeText } = useGetGithubUsers()
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.searchInputText}>Search for a GitHub User</Text>
        <Text style={styles.listText}> GitHub User List 👇</Text>
      </View>
      <UserListComponent value={gitHubUserList} />
      <SearchbarComponent value={search} onChange={handleOnChangeText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor:'#1321cf'
  },
  searchInputText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  listText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }
});
