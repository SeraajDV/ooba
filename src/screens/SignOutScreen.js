import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import firebase from 'firebase/app'

const SignOutScreen = ({navigation}) => {
    return (
        <>
        <View
            style={styles.bg}
        >
        <Text style={styles.question}>Are you sure you want to sign out?</Text>
        <TouchableOpacity
            style={styles.textBtn}
            onPress={() => firebase.auth().signOut()}
        >
            <Text style={styles.text}>
                Yes
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.textBtn}
            onPress={() => navigation.navigate('Dashboard')}
        >
            <Text style={styles.text}>
                No
            </Text>
        </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    question: {
        fontSize: 30,
        marginBottom: 20,
        color: 'grey'
    },
    text: {
        fontSize: 20,
        margin: 10,
        backgroundColor: '#6ABD45',
        paddingHorizontal: 50,
        paddingVertical: 10,
        color: '#fff',
        borderRadius: 15
    }
});

export default SignOutScreen;