import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PrequalifyScreen = () => {
    return (
        <>
        <View style={styles.header}>
                <Text style={styles.heading}>PREQUALIFY</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    heading: {
        fontSize: 25,
        color: '#3B5D5D',
        fontWeight: 'bold'
    }
});


export default PrequalifyScreen;