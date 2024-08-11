import React, { useState } from 'react';
import { View, TextInput, Button, ImageBackground, StyleSheet, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      console.log('Login in process...');
      const response = await fetch('http://192.168.2.135:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, 
          password: password
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        navigation.navigate('Home', { userName: data.userName });
      } else {
        console.log('Error while login:', data.message, response)
        Alert.alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error occured. Try Again!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email here"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password here"
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  input: {
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
});

export default Login;
