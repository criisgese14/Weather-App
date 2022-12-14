import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

export default function Input ({input, setInput, getForecast, setLoading, setData, setInput2, setForecast}) {

    return (
        <View>
            <Text style={styles.label}>Enter city</Text>
            <Searchbar
            placeholder='Ej: La plata, Ar'
            placeholderTextColor = 'grey'
            iconColor="grey"
            inputStyle={{color: 'white'}}
            value={input}
            onChangeText={value => setInput(value)}
            onIconPress={() => getForecast (setLoading, setData, setInput2, setInput, setForecast, input)}
            onSubmitEditing={() => getForecast (setLoading, setData, setInput2, setInput, setForecast, input)}
            style={styles.searchbar}
           />
        </View>
    )
}

const styles = StyleSheet.create ({
  label: {
    display: 'flex',
    marginTop: 5,
    marginLeft: 45,
    paddingHorizontal: 15,
    paddingBottom: 2,
    fontSize: 15,
    backgroundColor: 'rgb(11,18,30)',
    borderRadius: 20,
    width: 95,
    textAlign: 'center',
    color: 'grey',
    shadowColor: '#000',
    shadowOpacity: 0.36,
    shadowRadius: 5,
    elevation: 5,
    borderColor: 'grey',
    borderWidth: 1
  },
  searchbar: {
    padding: 5,
    paddingVertical: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'rgb(11,18,30)',
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 19,
    borderRadius: 30,
  },

})