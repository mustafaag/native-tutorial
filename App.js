import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({name: 'Mario', age: 12});
  const pressHandler = () =>{
    setName('Muhammad Ali');
    setPerson( {name:'Luigi',age: 20});
  }

  return (
    <View style={styles.container}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text> 
        <View style={styles.bottomContainer}>
          <Button onPress={pressHandler} title='update name'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    backgroundColor:'pink',
    padding:20,
  },

  boldText: {
    fontWeight: 'bold'
  },

  body: {
    backgroundColor:'yellow',
    padding: 20
  },
  bottomContainer: {
    marginTop: 20
  }
});
