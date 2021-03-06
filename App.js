import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'test1', key: '1' },
    {text: 'test2', key: '2' },
    {text: 'test3', key: '3' },
    {text: 'test4', key: '4' },
  ])

  const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(x=> x.key != key);
    });
  }

  const submitHandler = (text) =>{
    if(text.length > 3){
      setTodos((prevTodos) =>{
        return [
          {text:text , key: Math.random().toString()},
          ...prevTodos
        ]
      });
    } else { 
      Alert.alert('Oops!', 'Todo should be over 3 letters.', [
        {text: 'Ok'}
      ]);
    }   
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}> 
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo pressHandler={submitHandler}/>
          <View style={styles.list}> 
            <FlatList 
              data={ todos }
              renderItem={({ item })=>(
                <TodoItem item={item} pressHandler={pressHandler} />
                )             
              }
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,
  },
  list: {
    flex:1,
    marginTop:20 
  }
});
