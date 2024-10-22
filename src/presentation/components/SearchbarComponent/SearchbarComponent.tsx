import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  value: string,
  onChange: (value: string) => void
}

export const SearchbarComponent = ({value, onChange}: Props) => {
  return(
    <View style={styles.searchInputContainer}>
      <TextInput
        placeholder='Search...' 
        value={value} 
        onChangeText={onChange} 
        style={styles.searchInput}  />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 15
  },
  searchInputContainer: {
    padding: 8,
    backgroundColor:'#1321cf'
  }
});
