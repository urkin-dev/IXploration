import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { Pressable, StyleSheet, View } from 'react-native'
import HomeIcon from '@assets/nav/home.svg'
import FavoriteIcon from '@assets/nav/favorite.svg'
import { RoutesEnum } from '../lib/Routes'

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

				return (
					<Pressable
						style={styles.Button}
						key={route.key}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						onPress={onPress}
						onPressOut={onPress}>
						{route.name === RoutesEnum.Home ? (
							<View style={{ ...styles.ActiveIcon, backgroundColor: isFocused ? '#4c77ec24' : 'transparent' }}>
								<HomeIcon style={styles.StyledIcon} fill={isFocused ? '#4C78EC' : '#B7BBCA'} />
							</View>
						) : (
							<View style={{ ...styles.ActiveIcon, backgroundColor: isFocused ? '#4c77ec24' : 'transparent' }}>
								<FavoriteIcon style={styles.StyledIcon} fill={isFocused ? '#4C78EC' : '#B7BBCA'} />
							</View>
						)}
					</Pressable>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	Button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	NavContainer: {
		flexDirection: 'row',
		height: 60
	},
	StyledIcon: {
		width: 25,
		height: 25
	},
	ActiveIcon: {
		height: 40,
		width: 140,
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 15,
		borderRadius: 10
	}
})

export default Navigation
