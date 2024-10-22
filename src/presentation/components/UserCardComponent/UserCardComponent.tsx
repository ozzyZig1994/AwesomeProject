import { Image, Pressable, StyleSheet, View } from 'react-native';
import {Card, Text} from 'react-native-paper';
import { GithubUser } from '../../../domain/entities/user.interface';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../infrastructure/navigator/StackNavigator';

interface Props {
  user: GithubUser;
}

export const UserCardComponent = ({user}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  return(
    <Pressable
      style={{flex: 1}}
      onPress={ () => navigation.navigate('GithubReposScreen',{ login: user.login, avatar: user.avatar_url }) }
    >
      <Card style={styles.cardContainer}>
      <Text style={styles.name} variant="bodyLarge" lineBreakMode="middle">
        {user.login}
        {'\n#' + user.id}
      </Text>
      <View style={styles.backgroundContainer}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.background}
        />
      </View>
      <Image
        style={styles.userImage}
        source={{
          uri: user.avatar_url,
        }}
      />
    </Card>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#1321cf',
    height: 120,
    flex: 0.5,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 30
  },
  name: {
    fontSize: 22,
    color: 'white',
    top: 10,
    left: 10,
    fontWeight: 'bold'
  },
  userImage: {
    width: 70,
    height: 70,
    position: 'absolute',
    right: -10,
    top: 60,
    borderRadius: 45
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
