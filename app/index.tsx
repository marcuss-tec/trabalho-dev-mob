import { Link } from 'expo-router';
import { Mail, Lock, Eye  } from 'lucide-react-native';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen() {
  return (
    <View style={styles.containerBody}>
      <ImageBackground>
        <Image
          source={require('../assets/images/Fundo.jpg')}
          style={{
            position: 'absolute',
            top: -225,
            right: 0,
            left:0,
            width: 600,
            height: 400,
          }}
        />
      </ImageBackground>
      <View style={styles.containerLogo}>''
        <Image
          source={require('../assets/images/logoEL.jpeg')}
          style={{
            marginTop:120,
            width:150,
            height:150
          }}
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
                <Mail style={styles.icone} />
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
                <Lock style={styles.icone} />
                <Eye style={styles.iconEye}/>
              </View>
            </View>
          </View>
        </View>
      <View style={styles.viewBtn}>
        <View>
            <Link href="/compras" asChild>
              <TouchableOpacity>

                <LinearGradient
                    colors={['#95C0C1', '#12194B']}
                    start={{x:0,y:3.4}}
                    end={{x:1,y:2}}
                    style={styles.btnEnviar}
                  >
                  <Text style={styles.textEntrar}>Entrar</Text>
                </LinearGradient>

              </TouchableOpacity>
              </Link>
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
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingBottom:
  },
  input: {
    margin:20,
    backgroundColor: '#d7d8d7',
    borderRadius: 40,
    paddingVertical: 14,
    marginLeft:15,
    paddingHorizontal:45,
  },
  easyList: {
    fontSize: 30,
    fontWeight: 'bold',
     paddingTop: 20
  },
  viewForm: {
    backgroundColor: '#12194B',
    flex: 0.34,
    paddingHorizontal: -30,
    borderRadius:25,
    marginHorizontal:10,
    marginTop:50
  },
  textForm: {
    opacity:0.6,
    fontSize: 25,
    color: '#d7d8d7',
    paddingTop:15,
    paddingLeft:18,
  },
  icone: {
    position: 'absolute',
    left: 30,
    color: '#708070',
  },

  iconEye:{
    position: 'absolute',
    right: 40,
    color: '#708070',
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
    fontSize:23,
    fontWeight:'bold',
  },

  textAcimaForm:{
    flex:0,
    backgroundColor:"#ffffff",
    position: 'absolute',
    //paddingTop:10
    marginTop:390
  },

  imagemFundo:{
    position: 'absolute',
  }
})