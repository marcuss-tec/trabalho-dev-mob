import { CheckSquare, Square } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Tags from '../components/tags';

type listaDeitens = {
  listaDeTarefas: string
  onDelete: () => void
}

export default function Item({ listaDeTarefas, onDelete }: listaDeitens) {

  const [concluido, setConcluido] = useState(false);

  function alternarStatus() {
    setConcluido(!concluido);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={alternarStatus}>

        {concluido ? (
          <CheckSquare size={40} color='#5f5f5f'/>
        ) : (
          <Square size={40} color='#696969'/>
        )}

      </TouchableOpacity>

      <View style={{ marginLeft: 10, flex: 1 }}>

        <Text
          style={[
            styles.titulo,
            concluido && styles.textoConcluido
          ]}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {listaDeTarefas}
        </Text>


      </View>

      <View>
        <Tags onDelete={onDelete}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    paddingHorizontal: 12,
    marginHorizontal:15,
    marginBottom:30,
    borderRadius:15,
    padding:10,
    borderColor:'#808080',
    alignItems:'center',
    justifyContent: 'space-between'
  },

  titulo:{
    fontSize: 22,
    fontWeight: 'bold'
  },

  textoDescricao:{
    color:'#808080',
  },

  textoConcluido:{
    textDecorationLine:'line-through',
    color:'#808080'
  }
})