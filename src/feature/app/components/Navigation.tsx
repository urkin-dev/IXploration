import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { Pressable, StyleSheet, Text, View } from 'react-native'
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
						<View
							style={{
								...styles.ActiveIcon,
								backgroundColor: isFocused ? '#4c77ec24' : 'transparent',
								width: isFocused ? 140 : 'auto',
								paddingLeft: isFocused ? 15 : 0
							}}>
							{route.name === RoutesEnum.Home ? (
								<HomeIcon style={styles.StyledIcon} fill={isFocused ? '#4C78EC' : '#B7BBCA'} />
							) : (
								<FavoriteIcon style={styles.StyledIcon} fill={isFocused ? '#4C78EC' : '#B7BBCA'} />
							)}
							{isFocused && <Text style={styles.ActiveIconText}>{route.name}</Text>}
						</View>
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
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	ActiveIconText: {
		flex: 1,
		marginLeft: 10
	}
})

export default Navigation
