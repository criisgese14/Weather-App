import { StyleSheet, View } from 'react-native';
import Home from './src/Components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(11,18,30)'
  }
});
