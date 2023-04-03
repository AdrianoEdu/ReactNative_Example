import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const CustomTextInput = (component) => {
    return (
            <TextInput
                style={styles.input}
                onChangeText={ (text) => { component.press(text) } }
            />
    );
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#D5D5D5',
    },
});