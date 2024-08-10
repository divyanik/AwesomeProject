import * as React from 'react';
import { View, ImageBackground, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import RegisterationScreen from './screens/Registration';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator();


function MainScreen({navigation}: {navigation: any}) {
  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <View style={styles.buttonContainer}>
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
     </View>
     <View style={styles.buttonContainer}>
        <Button title='Registration' onPress={() => navigation.navigate('Registration')}  />
     </View>
    </View>
    </ImageBackground>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{title: 'Mobile Application'}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
        <Stack.Screen name="Registration" component={RegisterationScreen} options={{title: 'Registration'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 16,
    padding: 20,
  }
});


export default App;