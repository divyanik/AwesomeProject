import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import User from '../models/User';

// Pass parameter on navigation
function Home({route}: {route: any}) {
    const [data, setData] = useState<User[]>([]);
  
    // Call an external API and fetch record.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
        .catch((ex) => {
            console.error(ex);
            console.error('Error on Home page:', ex);
            Alert.alert('Error', 'An error occurred, Please try again.');
          });
    },[])

    // Render the DOM
    return(
        <View style={styles.container}>
            {/* Using parameter value */}
            <Text>Login by: {route.params.userName}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
                )}
            />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 16,
      color: '#555',
    }
  });

export default Home;