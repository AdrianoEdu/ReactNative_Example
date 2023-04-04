import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginView from "../view/LoginView";
import MainMenuView from "../view/MainMenuView";
import PokedexView from "../view/PokedexView";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="MainMenu" component={MainMenuView} />
        <Stack.Screen name="Pokedex" component={PokedexView} />
    </Stack.Navigator>
)