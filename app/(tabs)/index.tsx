import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O futebol é um esporte coletivo jogado entre duas equipes de 11 jogadores em um campo retangular com duas traves. O objetivo é marcar gols ao colocar a bola dentro da meta adversária, utilizando principalmente os pés, mas também outras partes do corpo, exceto as mãos (com exceção do goleiro).

A partida é dividida em dois tempos de 45 minutos, e vence a equipe que marcar mais gols. O futebol é conhecido por sua simplicidade, dinâmica e por ser o esporte mais popular do mundo, praticado e acompanhado por milhões de pessoas em diversos países.

      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63a9be',
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
