import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import 'firebase/auth'
import firebase from 'firebase/app'
import { SimpleLineIcons } from '@expo/vector-icons'
import img from '../../assets/anime1.gif'

const WelcomeScreen2 = ({navigation}) => {
    return (
        <View style={styles.bg}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>

            <Text style={styles.head}>Notifications</Text>
            <Text style={styles.body}>We've included in-app notifications to keep you updated on everything</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
                style={styles.skipBtn}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Text style={styles.skip}>SKIP</Text>
            </TouchableOpacity>
            <View style={styles.dots}>
                <View style={styles.dot} />
                <View style={styles.dotActive} />
                <View style={styles.dot} />
            </View>
            {/* <TouchableOpacity
                onPress={() => firebase.auth().signOut()}
            >
                <Text>LOGOUT</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={styles.arrow}
                onPress={() => navigation.navigate('Welcome3')}
            >
                <SimpleLineIcons name="arrow-right-circle" color='#fff' size={50} />
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
      backgroundColor: '#F16E60',
      flex: 1,
      display: 'flex',
    //   flexDirection: 'row',
      justifyContent: 'space-between'
    },
    skip: {
        color: '#fff',
        fontSize: 25
    },
    skipBtn: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginRight: 50,
        marginLeft: 30
    },
    dots: {
        alignSelf: 'flex-end',
        marginBottom: 30,
        flexDirection: 'row'
    },
    dot: {
        backgroundColor: 'lightgrey',
        height: 10,
        width: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    dotActive: {
        backgroundColor: '#fff',
        height: 12,
        width: 12,
        borderRadius: 12,
        marginHorizontal: 10
    },
    arrow: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 40
    },
    head: {
        fontSize: 50,
        color: '#fff',
    },
    body: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center'
    }
});

export default WelcomeScreen2;