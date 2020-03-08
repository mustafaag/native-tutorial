import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name : 'hello', id:1 },
    {name : 'test', id:2 },
    {name : 'test1', id:3 },
    {name : 'test2', id:4 },
    {name : 'test3', id:5 },
    {name : 'test4', id:6 },
    {name : 'test5', id:7 },
    {name : 'test6', id:8 },
  ]);


  return (
    <View style={styles.container}>
     <FlatList 
        numColumns={2}
        keyExtractor={ (item)=>{ return item.id}}
        data={people}
        renderItem= {({ item })=> (
          <Text style={styles.item}> { item.name }</Text>
        )}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop:24,
    padding:30,
    backgroundColor: 'pink',
    fontSize:24,
    marginHorizontal:10,
    marginTop:24
  }
  
});
