import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import Discover from "../screens/Discover"
import ItemScreen from "../screens/ItemScreen"

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Discover" component={Discover}/>
                <Stack.Screen name="ItemScreen" component={ItemScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}