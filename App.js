import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './routes/StackNavigation'
import Toast from 'react-native-toast-message';
import { MessageToast } from './components/Toast';

export default function App() {

  var messageToast = new MessageToast();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <Toast config={messageToast.getConfig}/>
    </SafeAreaView>
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

