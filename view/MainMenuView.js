//Style
import { StyleSheet, View,Button } from 'react-native';
import { MessageToast } from '../components/Toast';

export default props => {

  var messageToast = new MessageToast()

  return (
    <View style={styles.container}>
        <Button title='Success' onPress={messageToast.success("Ola", "Adriano")}></Button>
        <Button title='Error' onPress={messageToast.error("Ola", "Adriano")}></Button>
        <Button title='Info' onPress={messageToast.info("Ola", "Adriano")}></Button>
        <Button title='Get Pokemon' onPress={messageToast.info("Ola", "Adriano")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    color: "#ff0000"
  }
});

