import React, { useRef } from 'react'
import { Text, StyleSheet, Pressable, Animated } from 'react-native'
import { RoutesEnum } from '../lib/Routes'
import HomeIcon from '@assets/nav/home.svg'
import FavoriteIcon from '@assets/nav/favorite.svg'
import { useEffect } from 'react'

interface IProps {
	isFocused: boolean
	onPress: () => void
	routeName: string
}

const NavTab = ({ isFocused, onPress, routeName }: IProps) => {
	const animatedWidth = useRef(new Animated.Value(25)).current
	const animatedText = useRef(new Animated.Value(0)).current

	useEffect(() => {
		if (isFocused) {
			Animated.timing(animatedWidth, { duration: 300, useNativeDriver: false, toValue: 140 }).start()
			Animated.timing(animatedText, { duration: 600, useNativeDriver: false, toValue: 1 }).start()
		} else {
			animatedWidth.setValue(25)
			animatedText.setValue(0)
		}
	}, [isFocused])

	return (
		<Pressable
			style={styles.Button}
			accessibilityRole="button"
			accessibilityState={isFocused ? { selected: true } : {}}
			onPress={onPress}
			onPressOut={onPress}>
			<Animated.View
				style={{
					...styles.ActiveIcon,
					width: animatedWidth,
					backgroundColor: isFocused ? '#4c77ec24' : 'transparent',
					paddingLeft: isFocused ? 15 : 0
				}}>
				{routeName === RoutesEnum.Home ? (
					<HomeIcon style={styles.StyledIcon} fill={isFocused ? '#4C78EC' : '#B7BBCA'} />
				) : (
					<FavoriteIcon style={styles.StyledIcon} fill={isFocused ? '#4C78EC' : '#B7BBCA'} />
				)}
				{isFocused && (
					<Animated.Text style={{ ...styles.ActiveIconText, opacity: animatedText }}>{routeName}</Animated.Text>
				)}
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	Button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
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
		marginLeft: 10,
		color: '#4C78EC',
		fontSize: 16
	}
})

export default NavTab
