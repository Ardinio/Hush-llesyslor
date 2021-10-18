import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


function LoginScreen() {

  const login = () => {
    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LoginScreen</Text>
      <TextInput
            placeholder="E-mail"
            />
      <TextInput
          placeholder="Password"
        />
      <Text >Registrera Konto</Text>
      <Button title="Login" onPress={login}/>
    </View>
  );
}

export default LoginScreen;