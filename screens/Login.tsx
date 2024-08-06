import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, TextInput, Button, ImageBackground, StyleSheet, Alert } from 'react-native';

function Login(): React.JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      //http://localhost:3000/api/login
      console.warn(username, password);
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username, //'emilys'
          password: password, // 'emilyspass'
          expiresInMins: 30
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', data.message);
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred during login');
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
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your username here"
          keyboardType="numeric"
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
