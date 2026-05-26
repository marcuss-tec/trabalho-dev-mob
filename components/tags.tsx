import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Tags() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textoDaTag}>Texto da tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ff0000',
    borderRadius:5,
    padding:3
  },

  textoDaTag:{
    color:'#fff'
  }
})