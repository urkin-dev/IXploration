import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomePage } from '@feature/home'
import { FavoritePage } from '@feature/favorite'
import { RootStackParamList, RootTabParamList } from './lib/types'
import Navigation from './components/Navigation'
import { createStackNavigator } from '@react-navigation/stack'
import { ApartmentPage } from '@feature/apartment'

const Tab = createBottomTabNavigator<RootTabParamList>()
const Stack = createStackNavigator<RootStackParamList>()

const DEFAULT_SCREEN_OPTIONS = {
	headerShown: false
}

const BottomTabsNav = () => {
	return (
		<Tab.Navigator
			screenOptions={DEFAULT_SCREEN_OPTIONS}
			initialRouteName="Home"
			tabBar={(props) => <Navigation {...props} />}>
			<Tab.Screen name="Home" component={HomePage} />
			<Tab.Screen name="Favorites" component={FavoritePage} />
		</Tab.Navigator>
	)
}

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="BottomTabsNav">
				<Stack.Screen name="BottomTabsNav" component={BottomTabsNav} options={DEFAULT_SCREEN_OPTIONS} />
				<Stack.Screen name="ApartmentPage" component={ApartmentPage} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
