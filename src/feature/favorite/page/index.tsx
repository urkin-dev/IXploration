import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoritePage = () => {
	return (
		<View style={styles.Container}>
			<Text style={{ color: '#000' }}>Favorite Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	Container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
})

export default FavoritePage
