import { Square } from 'lucide-react-native'; 
import { StyleSheet, Text, View } from 'react-native';
import Tags from '../components/tags';

type listaDeitens={
  listaDeTarefas: string
}

export default function Item({listaDeTarefas}: listaDeitens) {
  return (
    <View style={styles.container}>

      <View>
        <Square size={40} color='#9e9e9e'/>
      </View>

      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text
          style={styles.titulo}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {listaDeTarefas}
        </Text>

        <Text style={styles.textoDescricao}>
          Descrição
        </Text>
      </View>

      <View>
        <Tags />
      </View>

    </View>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flexDirection:'row',
      backgroundColor:'#fff',
      paddingHorizontal: 12,
      marginHorizontal:35,
      marginBottom:30,
      borderRadius:15,
      padding:10,
      borderWidth:1,
      borderColor:'#808080',
      alignItems:'center',
      justifyContent: 'space-between'
    },

    titulo:{
      fontSize: 22,
      fontWeight: 'bold'

    },

    circulogreen:{
      color:'#67d874'
    },

    textoDescricao:{
      color:'#808080',
    }

  }
)