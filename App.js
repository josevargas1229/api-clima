import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clima from './components/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Pie />
    </View>
  );
}
export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
    </View>
  )
}

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>
      <Clima />
    </View>
  )
}

export const Pie = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.text}>José de Jesús Vargas Esparza || 5° "A"</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#518FDC'
  },
  encabezado: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#518FDC'
  },
  cuerpo: {
    flex: 8,
    backgroundColor: '#518FDC',
    width:'100%',
  },
  pie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#518FDC',
    width:'100%',
  },
  title:{
    color:'white',
    fontSize:40
  },
  text:{
    color: 'white'
  }

});
