import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Name({onDelete, name, alamat, onPress, onEdit}) {

    const styles = StyleSheet.create({
        item : {
            backgroundColor : '#FFF',
            padding: 8,
            borderRadius : 10,
            marginTop : 14,
            display : 'block'
        },
        deleteText : {
            fontSize : '20px',
            color : 'red',
            fontWeight : 'bold',
            marginLeft : '18rem',
            marginTop : '1rem',
            marginBottom : '1rem'
        },
        editText : {
            fontSize : '20px',
            color : '#778899',
            fontWeight : 'bold',
            marginLeft : '18rem',
            display : 'block'
        },
        input : {
            fontWeight : 'bold',
            fontSize : '20px',
            position : 'absolute',
            bottom : '3rem'
        },
        inputs : {
            fontWeight : 'bold',
            fontSize : '20px',
            bottom : '1.6rem',
            position : 'absolute'
        }
    })

    return (

        <View style={styles.item}>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.deleteText}>DEL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onEdit}>
                <Text style={styles.editText}>EDIT</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.input}>{name}</Text>
                <Text style={styles.inputs}>{alamat}</Text>
            </TouchableOpacity>
            
        </View>
        
    )
    


}