import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {datasource} from './Data.js';
import App2 from "./App";



const Add = ({navigation}) => {

    const [letter, setLetter] = useState("");
    const [letterType, setLetterType] = useState("Vowels");




    return (
        <View style={styles.container}>

            <Text>Letter:</Text>

            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={setLetter}
            />

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={letterType}
                    onValueChange={setLetterType}
                >
                    <Picker.Item label="Vowels" value="Vowels" />
                    <Picker.Item label="Consonants" value="Consonants" />
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="SUBMIT" onPress={() => {
                    let item = {key:letter};
                    let indexnum= 1;
                    if(letterType ==="Vowels"){
                        indexnum = 0;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home")
                }
                }
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginBottom: 20,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default Add;
