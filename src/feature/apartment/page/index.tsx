import { IApartmentNavigationProp } from '@feature/app'
import React from 'react'
import { View, Text } from 'react-native'

interface IProps extends IApartmentNavigationProp {}

const ApartmentPage = ({ route, navigation }: IProps) => {
	const { id } = route.params

	return (
		<View>
			<Text>Apartment Page id: {id}</Text>
		</View>
	)
}

export default ApartmentPage
