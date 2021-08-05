import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { StyleSheet, View } from 'react-native'

import NavTab from './NavTab'

const Navigation = ({ state, navigation }: BottomTabBarProps) => {
	return (
		<View style={styles.NavContainer}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				return <NavTab key={route.key} isFocused={isFocused} onPress={onPress} routeName={route.name} />
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	NavContainer: {
		flexDirection: 'row',
		height: 60
	}
})

export default Navigation
