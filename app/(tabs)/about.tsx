import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Sou Arthur Felix e tenho 16 anos 
        e esse é meu site sobre futebol, bem vindo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5047d1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: '#000000',
  },
   button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

