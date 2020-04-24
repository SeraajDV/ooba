import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthFlow } from 'react-native-doorman'
import FBLB from '../components/FBLoginButton'

const Phone = () => {
  const { navigate } = useNavigation()

  return (
    <AuthFlow.PhoneScreen 
      onSmsSuccessfullySent={() => {
        navigate('Confirm')
      }}
      renderHeader={null}
      backgroundColor='#6ABD45'
    />
  )
}

const Confirm = () => (
  <AuthFlow.ConfirmScreen 
    renderHeader={null}
    backgroundColor='#6ABD45'
  />
)

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Phone" component={Phone} options={{headerShown: false}}/>
    <Stack.Screen name="Confirm" component={Confirm} options={{headerShown: false}} />
  </Stack.Navigator>
)

export default AuthStack