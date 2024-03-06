import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigations from './src_30/navigations/StackNavigation'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <StackNavigations/>
    </NavigationContainer>
  )
}

export default App;