import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name : 'hello', key:1 },
    {name : 'test', key:2 },
    {name : 'test1', key:3 },
    {name : 'test2', key:4 },
    {name : 'test3', key:5 },
    {name : 'test4', key:6 },
    {name : 'test5', key:7 },
    {name : 'test6', key:8 },
  ]);


  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map(person =>(
              <View key={person.key}>
                <Text style={styles.item}> {person.name}</Text>
              </View>          
            )
          )
        }
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop:24,
    padding:30,
    backgroundColor: 'pink',
    fontSize:24
  }
  
});
