import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoritePage = () => {
	return (
		<View>
			<Text style={styles.Default}>Favorite Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	Default: {
		color: 'red'
	}
})

export default FavoritePage
