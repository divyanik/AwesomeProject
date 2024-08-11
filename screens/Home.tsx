import React, { useEffect, useState } from 'react';
import {  Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Weather from '../models/Weather';

// Call an external API and fetch record.
const api = {
    key: '97838a5d6f5fb63e6852e9ce5251cd08',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

// Pass parameter on navigation
function Home({route}: {route: any}) {
    const [cityName, setCityName] = useState('');
    const [apiResult, setApiResult] = useState<Weather[]>([]);
  
    const apiCall = () => {
        fetch(`${api.baseUrl}weather?q=${cityName}&appid=${api.key}`)
        .then((response) => response.json())
        .then((response) => {
            setApiResult(response);
        })
    }

    // Render the DOM
    return(
        <View style={styles.container}>
            <Text style={styles.mediumWhiteText}>Login by: {route.params.userName}</Text>
                <Text style={styles.largeWhiteText}>Weather Forcast</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCityName}
                    value={cityName}
                    placeholder="Enter city"
                />
                <Button title="Show weather" onPress={apiCall} />

                {/* Display API content */}
                {
                    typeof apiResult.main != "undefined"
                    ? ( 
                        <View style= {styles.weatherContainer}>
                            <Text style= {styles.day}>{apiResult.name}</Text>
                            <Text style= {styles.temp}>{apiResult.main.temp} degees</Text>
                            <Text style= {styles.day}>{apiResult.weather[0].main}</Text>
                            <Text style= {styles.day}>{apiResult.weather[0].description}</Text>
                        </View>
                    )
                    : ('')
                    }
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1.4,
      padding: 30,
      backgroundColor: '#18181bcc'
    },
    weatherContainer: {
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 30
    },
    day: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15
    },
    temp: {
        fontSize: 16,
        color: 'white',
        fontWeight: '100',
        textAlign: 'center'
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
      largeWhiteText: {
        fontSize: 24, 
        color: 'white'
      },
      mediumWhiteText: {
        fontSize: 20, 
        color: 'white'
      }
  });

export default Home;