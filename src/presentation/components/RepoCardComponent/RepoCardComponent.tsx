import { Image, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { GithubUserRepo } from '../../../domain/entities/repo.interface';

interface Props {
  repos: GithubUserRepo
}

export const RepoCardComponent = ({repos}: Props) => {
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.name} variant="bodyLarge" lineBreakMode="middle">
        {repos.full_name}
      </Text>
      <Text variant='bodyMedium' style={styles.description}>
        {'\n' + repos.description}
        {'\n' + repos.language}
        {'\n⭐ ' + repos.stargazers_count}{'\t\t👀' + repos.watchers_count}
      </Text>
      <View style={styles.backgroundContainer}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.background}
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#1321cf',
    height: 120,
    flex: 0.5,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10
  },
  name: {
    fontSize: 22,
    color: 'white',
    top: 10,
    left: 10,
    fontWeight: 'bold'
  },
  description: {
    color: 'white',
    left: 10,
    fontWeight: 'bold'
  },
  background: {
    width: 100,
    height: 100,
    right: -25,
    top: -25,
    opacity: 0.4,
  },
  backgroundContainer: {
    alignItems: 'flex-end',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    opacity: 0.5,
  },
});
