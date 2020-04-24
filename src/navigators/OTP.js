import React from 'react'
import { Text } from 'react-native'
import { DoormanProvider, AuthGate } from 'react-native-doorman'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Stack'
import Loader from '../components/Loader'
import anime from '../animations/loading.json'
import Lottie from 'lottie-react-native'
import Lol from '../components/Lol'
import Main from '../navigators/Main'

import firebase from 'firebase/app'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyC97utkOAFRrtEtZ9IzH9XGPBu03IH66W8",
  authDomain: "ooba-3e055.firebaseapp.com",
  databaseURL: "https://ooba-3e055.firebaseio.com",
  projectId: "ooba-3e055",
  storageBucket: "ooba-3e055.appspot.com",
  messagingSenderId: "183306415235",
  appId: "1:183306415235:web:b1d6de9d2f70b30d2cbfb6",
  measurementId: "G-2DWLB41JCZ"
};


// 1. initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// 2. create your app
const AuthedApp = () => ( 
  <Main />
)
const App = () => {
  return (
    <NavigationContainer>
      <DoormanProvider publicProjectId="9Vd5od4CEQBMR8sxwdRI">
        <AuthGate>
          {({ user, loading }) => {
            if (loading) return <><Loader/></>
          
            // if a user is authenticated
            if (user) return <AuthedApp />
            
            // otherwise, send them to the auth flow
            return <AuthStack />
          }}
        </AuthGate>
      </DoormanProvider>
    </NavigationContainer>
  );
}

export default App;
