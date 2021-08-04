import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomePage } from '@feature/home'
import { FavoritePage } from '@feature/favorite'
import { RootTabParamList } from './lib/types'
import Navigation from './components/Navigation'

const Tab = createBottomTabNavigator<RootTabParamList>()

const SCREEN_OPTIONS = {
	headerShown: false
}

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={SCREEN_OPTIONS}
				initialRouteName="Home"
				tabBar={(props) => <Navigation {...props} />}>
				<Tab.Screen name="Home" component={HomePage} />
				<Tab.Screen name="Favorites" component={FavoritePage} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default App
