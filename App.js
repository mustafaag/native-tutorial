import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState(12);
 

  return (
    <View style={styles.container}>
      <Text>Enter  name: </Text>
        <TextInput 
          multiline
          
          style={styles.input} 
          placeholder='e.g. Mustafa Aga'
          onChangeText={(val)=>{
              setName(val)
            }
          }
        />
        <Text>Enter  age: </Text>
        <TextInput 
          style={styles.input} 
          keyboardType='numeric'
          placeholder='e.g. 22'
          onChangeText={(val)=>{
              setAge(val)
            }
          }
        />
        <Text>His name is {name} and his age is {age}</Text> 
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width:200,
  }
});
