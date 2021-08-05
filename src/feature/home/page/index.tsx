import { IHomeNavigationProp } from '@feature/app'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Slider from './components/Slider'

interface IProps extends IHomeNavigationProp {}

const HomePage = ({ route, navigation }: IProps) => {
	return (
		<View style={styles.HomeContainer}>
			<Slider />
		</View>
	)
}

const styles = StyleSheet.create({
	HomeContainer: {
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '#F2F2F2',
		flex: 1
	}
})

export default HomePage
