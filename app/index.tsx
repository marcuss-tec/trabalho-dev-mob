import { Link } from 'expo-router';
//import { KeyRound, Mail } from 'lucide-react-native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.containerBody}>
      <View style={styles.containerLogo}>''
        <Image
          source={require('../assets/images/gatao.jpg')}
        />
        <Text style={styles.easyList}>EasyList</Text>
      <View style={styles.textAcimaForm}>
        <Text style={styles.suaLista}>"Sua lista de compras, mais fácil"</Text>
      </View>  
      </View>
        <View style={styles.viewForm}>
          <View>
              <Text style={styles.textForm}>Email</Text>
              <View style={styles.iconBlock}>
                <TextInput
                  style={styles.input}
                  placeholder=''
                />
                {/*<Mail style={styles.icone} />*/}
              </View>
          </View>
          <View>
            <View>
              <Text style={styles.textForm}>Senha</Text>
              <View style={styles.iconBlock}>
                <TextInput
                  style={styles.input}
                  placeholder=''
                  secureTextEntry={true}
                  textContentType='password'
                />
                {/*<KeyRound style={styles.icone} />*/}
              </View>
            </View>
          </View>
        </View>
      <View style={styles.viewBtn}>
        <View>
          <TouchableOpacity style={styles.btnEnviar}>
            <Link href="/compras" asChild>
            <Text style={styles.textEntrar}>Entrar</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerLogo: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    margin:20,
    backgroundColor: '#d7d8d7',
    borderRadius: 40,
    paddingVertical: 14,
    marginLeft:15,
    paddingHorizontal:25,
  },
  easyList: {
    fontSize: 30,
    fontWeight: 'bold',
     paddingTop: 20
  },
  viewForm: {
    backgroundColor: '#111377',
    flex: 0.4,
    paddingHorizontal: -30,
    borderRadius:25,
    marginHorizontal:10,
  },
  textForm: {
    opacity:0.5,
    fontSize: 25,
    color: '#d7d8d7',
    paddingTop:15,
    paddingLeft:18,
  },
  icone: {
    position: 'absolute',
    right: 15,
    color: '#708070'
  },
  iconBlock:{
    justifyContent: 'center'
  },
  textEntrar:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnEnviar:{
    backgroundColor: '#878af6',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 35
},
  viewBtn:{
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff'
  },

  suaLista:{
    flex:0,
  },

  textAcimaForm:{
    flex:0,
  }
})