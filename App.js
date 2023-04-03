import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CustomButon } from './components/CustomButton';
import { Login } from './model/login';

//Component
import { CustomTextInput } from './components/CusttomTextInput';

export default function App() {

  var login = new Login();

  return (
    <View style={styles.container}>
      <CustomTextInput
        title="insert value"
        press={ (text) => login.setLogin(text) }
      />
      <CustomTextInput
        title="insert password"
        press={ (text) => login.setPassword(text) }
      />
      <CustomButon
        title = "Register"
        backgroundColor = "red"
        click={executeLogin}
      />
    </View>
  );

  function executeLogin() {
    console.log("Login : " + login.getLogin() + "\n" + "Password : " + login.getPassword())
  }
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

