import { IApartmentNavigationProp } from '@feature/app'
import { getApartmentById, IApartment } from 'api/dataExm'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Animated, Dimensions, StyleSheet, View, Text, Image } from 'react-native'
import BottomDrawer from './components/BottomDrawer'

const { width, height } = Dimensions.get('screen')

interface IIndicator {
	scrollX: Animated.Value
	data: string[]
}

const Indicator = ({ scrollX, data }: IIndicator) => {
	return (
		<View style={styles.Indicator}>
			{data.map((_, idx) => {
				const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]

				const backgroundColor = scrollX.interpolate({
					inputRange,
					outputRange: ['transparent', '#fff', 'transparent']
				})

				return (
					<Animated.View
						key={`indicator-${idx}`}
						style={{ ...styles.IndicatorItem, backgroundColor: backgroundColor }}
					/>
				)
			})}
		</View>
	)
}

interface IProps extends IApartmentNavigationProp {}

const ApartmentPage = ({ route, navigation }: IProps) => {
	const { id } = route.params
	const [data, setData] = useState<IApartment | undefined>(undefined)
	const scrollX = useRef(new Animated.Value(0)).current

	useEffect(() => {
		setData(getApartmentById(id))
	}, [])

	return (
		<View style={styles.Container}>
			{data ? (
				<>
					<Animated.ScrollView
						pagingEnabled
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{ flex: 0.9 }}
						scrollEventThrottle={32}
						onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
							useNativeDriver: false
						})}>
						{data.photos.map((photo, idx) => (
							<View style={{ width }} key={idx}>
								<Image source={{ uri: photo }} style={{ width: width, height: height }} />
							</View>
						))}
					</Animated.ScrollView>
					{data && <Indicator data={data.photos} scrollX={scrollX} />}
					<BottomDrawer />
				</>
			) : (
				<Text>Loading</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	Indicator: {
		position: 'absolute',
		bottom: 100,
		flexDirection: 'row'
	},
	IndicatorItem: {
		height: 10,
		width: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#fff',
		margin: 10
	}
})

export default ApartmentPage
