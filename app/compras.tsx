import { Bell, List, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Item from '../components/ItemTarefa';

export default function Tela2() {

  const [textoTarefa, setTextoTarefa] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  const additemLista = () => {
    if(textoTarefa.trim() === '') return;

    setLista((prev) => [...prev, textoTarefa]);
    setTextoTarefa('');
  }

  const excluirItem = (indexItem: number) => {
    const novaLista = lista.filter((_, index) => index !== indexItem);

    setLista(novaLista);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <List 
          size={35}
        />
        <Text style={styles.textoTopo}>
          Adicionar item na lista
        </Text>
        <Bell 
        size={35}
        strokeWidth={2}
        />
      </View>

      <View style={styles.inputIcon}>

        <TextInput 
          placeholder='Adicionar Item'
          style={styles.input}
          value={textoTarefa}
          onChangeText={setTextoTarefa}
        />

        <TouchableOpacity style={styles.btnAdd} onPress={additemLista}>
          <Plus
            size={25}
            color={'#ffffff'}
            strokeWidth={4}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.fundoLista}>
        <View>

          {lista.map((item, index) => (
            <Item
              key={index}
              listaDeTarefas={item}
              onDelete={() => excluirItem(index)}
            />
          ))}

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },

  header:{
    backgroundColor:'#95C0C1',
    flexDirection:'row',
    paddingHorizontal: 12,
    marginBottom:30,
    padding:10,
    alignItems:'center',
    justifyContent: 'space-between'
  },

  input:{
    fontSize:20,
    borderRadius:40,
    flex:1,
    paddingHorizontal:10,
    height:60,
    marginVertical:1,
  },

  textoTopo:{
    fontSize:20,
    fontWeight: 'bold',
    color: "#303030",
    marginHorizontal: 10,
    marginVertical:40
  },

  btnAdd:{
    position:'absolute',
    left:15,
    backgroundColor:'#95C0C1',
    paddingHorizontal:8,
    paddingVertical:6,
    marginVertical:20,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },

  textBtnAdd:{
    fontSize:20,
    fontWeight:'bold',
    justifyContent:'center',
  },

  inputIcon:{
    backgroundColor:'#969696',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:8,
    paddingHorizontal:55,
    marginHorizontal:25,
    borderRadius:100,
    marginBottom:50
  },

  fundoLista:{
    backgroundColor:'#95C0C1',
    marginHorizontal:30,
    paddingTop:25,
    borderRadius:30
  }
})