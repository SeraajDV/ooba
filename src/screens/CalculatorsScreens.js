import React, {useState} from 'react'
import { View, Text, StyleSheet, Slider, TextInput, TouchableOpacity } from 'react-native'

const CalculatorsScreen = () => {
    const [principal, setPrincipal] = useState(0);
const [interest, setInterest] = useState(0);
const [years, setYears] = useState(0);
const [installments, setInstallments] = useState(0);
const [deposit, setDeposit] = useState(0)

    return (
        <>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text style={styles.label}>Purchase price</Text>
        <Text style={styles.slideNum}>{principal}</Text>
        </View>
        <Slider 
            maximumValue={300000}
            value={principal}
            onValueChange={(num) => setPrincipal(num)}
            step={10000}
            thumbTintColor='#00BEDF'
            style={{fontSize: 10}}

        />
        <View style={{flexDirection: 'row', color: 'lightgrey', justifyContent: 'space-between', marginHorizontal: 5, marginBottom: 30}}>
            <Text>0</Text>
            <Text>3 mil</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.label}>Years to pay</Text>
        <Text style={styles.slideNum}>{years}</Text>
        </View>
        <Slider 
            maximumValue={30}
            minimumValue={5}
            value={years}
            onValueChange={(num) => setYears(num)}
            step={1}
            thumbTintColor='#00BEDF'
            style={{fontSize: 10}}

        />
        <View style={{flexDirection: 'row', color: 'lightgrey', justifyContent: 'space-between', marginHorizontal: 5, marginBottom: 30}}>
            <Text>5</Text>
            <Text>30</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.label}>Interest rate</Text>
        <Text style={styles.slideNum}>{interest}</Text>
        </View>
        <Slider 
            maximumValue={14}
            minimumValue={7}
            value={interest}
            onValueChange={(num) => setInterest(num)}
            step={1}
            thumbTintColor='#00BEDF'
            style={{fontSize: 10}}

        />
        <View style={{flexDirection: 'row', color: 'lightgrey', justifyContent: 'space-between', marginHorizontal: 5, marginBottom: 30}}>
            <Text>7%</Text>
            <Text>14%</Text>
        </View>
        <Text style={styles.label}>Deposit</Text>
    <TextInput 
      value={deposit}
      onChangeText={text => setDeposit(text)}
      keyboardType="numeric"
      style={styles.input}
    />
        <TouchableOpacity
        >
          <Text style={styles.calcLabel}>Calculate</Text>
        </TouchableOpacity>
        <View style={styles.paymentView}>
          <Text style={styles.label}>YOUR MONTHLY INSTALLMENTS</Text>
          <Text style={styles.payment}>R {installments.toFixed(0)}</Text>
        </View>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
      },
      label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
      },
      calcLabel:{
        fontSize: 30,
        marginBottom: 5,
        marginLeft: 5,
        alignSelf: 'flex-end',
        backgroundColor: '#BACAD3',
        color: 'white',
        padding: 10,
        borderRadius: 20
      },
      paymentView: {
        flex: 1,
        borderWidth: 2,
        backgroundColor: '#6ABD45',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        borderColor: '#BACAD3'
      },
      payment: {
        fontSize: 40,
        color: 'white'
      },
      slideNum: {
          paddingVertical: 5,
          paddingHorizontal: 40,
          color: 'white',
          backgroundColor: 'grey',
          borderRadius: 20,
        
        
      }
      });
    
    export default CalculatorsScreen;
    