import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Trash2} from 'lucide-react-native'

type Props = {
  onDelete: () => void
}

export default function Tags({ onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDelete}>
        <Trash2 
        size={30}
        color={'#4d4d4d'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:3
  },
})