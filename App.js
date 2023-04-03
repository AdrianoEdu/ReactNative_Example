import { StyleSheet, Text, View } from 'react-native';
import { Login } from './model/login';
import LoginView from './view/LoginView';

export default function App() {

  var login = new Login();

  return (
    <View style={styles.container}>
      <LoginView></LoginView>
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

