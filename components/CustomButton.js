import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export const CustomButon = (component) => {

    return (
        <Button
            title={component.title}
            color={component.backgroundColor}
            onPress={component.click}
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