import React from 'react'
import { useRef } from 'react'
import { Dimensions, GestureResponderEvent, PanResponder, PanResponderGestureState } from 'react-native'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { height, width } = Dimensions.get('screen')

enum DrawerState {
	Hidden = -350,
	FullOpen = -100,
	Visible = -300
}

const STARTING_POSITION = DrawerState.Hidden - DrawerState.FullOpen

const BottomDrawer = () => {
	const animatedPosition = useRef(new Animated.Value(STARTING_POSITION)).current

	const animateMove = (toValue: number) => {
		Animated.spring(animatedPosition, {
			toValue,
			useNativeDriver: false
		}).start()
	}

	const movementValue = (gestureState: PanResponderGestureState) => {
		return height - gestureState.moveY + DrawerState.Visible
	}

	const onMoveShouldSetPanResponder = (_: GestureResponderEvent, gestureState: PanResponderGestureState) => {
		return gestureState.dy >= 10 || gestureState.dy <= -10
	}

	const onPanResponderMove = (_: GestureResponderEvent, gestureState: PanResponderGestureState) => {
		const toValue = Math.min(0, movementValue(gestureState))

		animateMove(toValue)
	}

	const onPanResponderRelease = (_: GestureResponderEvent, gestureState: PanResponderGestureState) => {
		const isMoveMoreThatnThird = movementValue(gestureState) < DrawerState.Hidden / 3
		const toValue = isMoveMoreThatnThird ? STARTING_POSITION : 0

		animateMove(toValue)
	}

	const panGesture = useRef(
		PanResponder.create({
			onPanResponderMove,
			onPanResponderRelease,
			onMoveShouldSetPanResponder,
			onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder
		})
	).current

	return (
		<Animated.View style={[styles.Container, { bottom: animatedPosition }]}>
			<View style={styles.GestureArea} {...panGesture.panHandlers}>
				<View style={styles.PullItem} />
			</View>
			<SafeAreaView style={styles.Content}>
				<View style={styles.Container}>
					<Text>Content</Text>
				</View>
			</SafeAreaView>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	Container: {
		position: 'absolute',
		width: width,
		height: Math.abs(DrawerState.Hidden),
		marginBottom: DrawerState.Hidden - DrawerState.Visible,
		paddingBottom: Math.abs(DrawerState.FullOpen),
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: '#fff'
	},
	GestureArea: {
		width: width,
		height: 40,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	},
	PullItem: {
		width: 40,
		height: 5,

		borderRadius: 20,
		backgroundColor: '#e2e2e2'
	},
	Content: {
		marginVertical: 30,
		paddingHorizontal: 10,
		height: '100%'
	}
})

export default BottomDrawer
