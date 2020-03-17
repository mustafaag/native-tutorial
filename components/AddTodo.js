import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'


export default function AddTodo({pressHandler}) {
    const [text, setText] =  useState('');

    const changeHandler = (val) =>{
        setText(val);
    }
    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder='new todo..'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={()=> pressHandler(text)} title="add todo" color="coral" />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 30,
        paddingHorizontal: 10,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})