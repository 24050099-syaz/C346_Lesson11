import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {

    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={styles.container}>

            <Text>Letter:</Text>

            <TextInput
                style={styles.input}
                value={letter}
                onChangeText={setLetter}
                maxLength={1}
            />

            <View style={styles.row}>
                <View style={styles.buttonBox}>
                    <Button
                        title="Save"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type === "Vowels") {
                                indexnum = 0;
                            }
                            datasource[indexnum].data[route.params.index].key = letter;
                            navigation.navigate("Home");
                        }}
                    />
                </View>

                <View style={styles.buttonBox}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type === "Vowels") {
                                indexnum = 0;
                            }
                            Alert.alert(
                                "Are you sure",
                                "",
                                [
                                    {
                                        text: 'Yes',
                                        onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }
                                    },
                                    { text: 'No' }
                                ]
                            );
                        }}
                    />
                </View>
            </View>

        </View>
    );
};

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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonBox: {
        flex: 1,
        marginHorizontal: 5,
    }
});

export default Edit;
