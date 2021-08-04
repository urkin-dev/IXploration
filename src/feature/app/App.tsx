import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomePage } from '@feature/home'
import { FavoritePage } from '@feature/favorite'

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Home">
				<Tab.Screen name="Home" component={HomePage} />
				<Tab.Screen name="Favorites" component={FavoritePage} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App
