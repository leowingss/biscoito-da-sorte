import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'Deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  function quebraBiscoito() {
    setImg(require('./src/biscoitoAberto.png'));

    const fraseRandom = frases[Math.floor(Math.random() * frases.length)];

    setTextoFrase(fraseRandom)
  }
  
  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito} >
        <View style={styles.btnBotao}>
          <Text style={styles.btnTexto} >Quebrar Biscoito </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={reiniciarBiscoito} style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} >
        <View style={styles.btnBotao}>
          <Text style={[styles.btnTexto, { color: '#121212' }]} >Reiniciar Biscoito </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 20
  },
  btnBotao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#DD7b22'
  }
})

export default App;
