//Importa o React e o useState
// useState serve para criar valores que podem mudar na tela
import React, { useState } from "react";
//Importa componentes nativos do react native
import {
  View, //caixa / area da tela
  Text, // textos
  Button, //botao
  StyleSheet,// estilos
  TouchableOpacity // botao customizável
} from "react-native-web";

// componente principal APP
export default function Jogador1() {
  // Crai uma estado (variavel php) chamado "pontos"
  // pontos = valor atual 
  // setPontos = função para alterar o valor
  // 0 = valor inicial

  const [pontos, setPontos] = useState(0);
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  // função para aumentar 1 ponto
  function aumentar() {
    // pega o valor auto e soma +1
    setPontos(pontos + 1);
  }
  // função para diminuir 1 ponto
  function diminuir() {
    // pega o valor atual e subtrai 1
    if (pontos > 0) {
      setPontos(pontos - 1)
    };
  }
  // função para resetar o contador 
  function resetar() {
    // volta o valor para 0
    setPontos(0);
  }

  function aumentar1() {
    // pega o valor auto e soma +1
    setPontos1(pontos1 + 1);
  }
  // função para diminuir 1 ponto
  function diminuir1() {
    // pega o valor atual e subtrai 1
    if (pontos1 > 0) {
      setPontos1(pontos1 - 1)
    };
  }
  // função para resetar o contador 
  function resetar1() {
    // volta o valor para 0
    setPontos1(0);
  }

  function aumentar2() {
    // pega o valor auto e soma +1
    setPontos2(pontos2 + 1);
  }
  // função para diminuir 1 ponto
  function diminuir2() {
    // pega o valor atual e subtrai 1
    if (pontos2 > 0) {
      setPontos2(pontos2 - 1)
    };
  }
  // função para resetar o contador 
  function resetar2() {
    // volta o valor para 0
    setPontos2(0);
  }

  // tudo que esta no RETURN aparece na tela 
  return (
  
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🎮 <b>Contador Gamer</b>
      </Text>
      <View style={styles.lado_lado}>
        <View style={styles.container}>
          {/* Titulo do APP */}
          <Text style={styles.titulo}>
            <b>Jogador 1</b>
          </Text>
          <Text style={styles.pontos}>{pontos}</Text>
          <View style={styles.areaBotoes}>
            <TouchableOpacity onPress={aumentar} style={styles.botao}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={diminuir} style={styles.botao}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetar} style={styles.botaoReset} >
              <Text style={styles.textoBotao}>Resetar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Titulo do APP */}
        <View style={styles.container}>
          <Text style={styles.titulo}>
          <b>Jogador 2</b>
          </Text>
          {/* Mostra o valor dos pontos */}
          <Text style={styles.pontos}>{pontos1}</Text>
          {/* área dos botões +1 e -1 onPress é quando clica no botão */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity onPress={aumentar1} style={styles.botao}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={diminuir1} style={styles.botao}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetar1} style={styles.botaoReset} >
              <Text style={styles.textoBotao}>Resetar</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.container}>
          <Text style={styles.titulo}>
          <b>Jogador 3</b>
          </Text>
          {/* Mostra o valor dos pontos */}
          <Text style={styles.pontos}>{pontos2}</Text>
          {/* área dos botões +1 e -1 onPress é quando clica no botão */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity onPress={aumentar2} style={styles.botao}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={diminuir2} style={styles.botao}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetar2} style={styles.botaoReset} >
              <Text style={styles.textoBotao}>Resetar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );

}
//Area de estilos do APP
const styles = StyleSheet.create({
  //Estilo da tela principal
  container: {
    // Ocupa a tela toda
    flex: 1,
    // Cor do fundo
    backgroundColor: 'powderblue',
    // Centraliza Horizonalmente
    alignItems: 'center',
    // Centraliza Verticalmente
    justifyContent: 'center',
    //Espaço Interno
    padding: 20,
  },

  lado_lado: {
    flexDirection: 'row'
  },

  // ESTILO DO TITULO
  titulo: {
    // TAMANHO DA FONTE
    fontSize: 32,
    // COR DO TEXTO
    color: '#000',
    // TEXTO EM NEGRITO
    fontWight: 'bold',
    // ESPAÇO ABAIXO
    marginBottom: 30,
  },
  // ESTILO DOS PONTOS
  pontos: {
    // TAMANHO GIGANTE
    fontSize: 80,
    // COR BRANCA
    color: '#000',
    // ESPAÇO ABAIXO
    marginBottom: 40,
    // NEGRITO
    fontWeight: 'bold',
  },
  // ARÉA DOS BOTÕES
  areaBotoes: {
    // DEIXA UM BOTÃO AO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom: 20,
  },
  // ESTILO DOS BOTÕES +1 E -1
  botao: {
    // COR DO BOTÃO
    backgroundColor: 'skyblue',
    // ESPAÇAMENTO VERTICAL 
    paddingVertical: 15,
    // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
    // ARREDONDA AS BORDAS
    borderRadius: 12,
    // ESPAÇO ENTRE BOTÕES
    marginHorizontal: 10,
  },
  // ESTILO DE BOTÃO RESETAR
  botaoReset: {
    // COR VERMELHA
    backgroundColor: 'steelblue',
    // ESPAÇAMENTOS
    paddingVertical: 15,
    paddingHorizontal: 40,
    // BORDAS ARREDONDADAS
    borderRadius: 12,
  },
  // ESTILO DO TEXTO DOS BOTÕES 
  textoBotao: {
    // TAMANHO DA LETRA
    fontSize: 22,
    // COR DO TEXTO 
    color: '#000',
    // NEGRITO
    fontWeight: 'bold',

  }
});


