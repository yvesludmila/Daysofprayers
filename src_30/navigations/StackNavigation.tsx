import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/Home/HomeScreen"
import TenyMialohaScreen from "../screens/TenyMialoha/TenyMialohaScreen"
import TontoloSilamoScreen from "../screens/TontoloSilamo/TontoloSilamoScreen"
import FombaFivavakaScreen from "../screens/FombaFivavaka/FombaFivavakaScreen"
import Days30Screen from "../screens/30Days/Days30Screen"
import EtoScreen from "../screens/Eto/EtoScreen"
import FanazavanaScreen from "../screens/Fanazavana/FanazavanaScreen"
import WwwScreen from "../screens/www/WwwScreen"
import DaysDetailScreen from "../screens/30Days/DaysDetailScreen"

const Stack = createNativeStackNavigator()

const StackNavigations = () => {
    return(
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'green'
                },
                headerTintColor: '#ffffff',
                headerShown: false
            }}
        >
            <Stack.Screen options={{ headerShown: false}} name="HomeScreen" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false}} name="TenyMialoha" component={TenyMialohaScreen} />
            <Stack.Screen options={{ headerShown: false}} name="TontoloSilamo" component={TontoloSilamoScreen} />
            <Stack.Screen options={{ headerShown: false}} name="FombaFivavaka" component={FombaFivavakaScreen} />
            <Stack.Screen options={{ headerShown: false}} name="30Days" component={Days30Screen} />
            <Stack.Screen options={{ headerShown: false}} name="DaysDetail" component={DaysDetailScreen} />
            <Stack.Screen options={{ headerShown: false}} name="Eto" component={EtoScreen} />
            <Stack.Screen options={{ headerShown: false}} name="Fanazavana" component={FanazavanaScreen} />
            <Stack.Screen options={{ headerShown: false}} name="www" component={WwwScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigations