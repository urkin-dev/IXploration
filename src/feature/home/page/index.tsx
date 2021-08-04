import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomePage = () => {
	return (
		<View>
			<Text style={styles.Default}>Home Page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	Default: {
		color: 'green'
	}
})

export default HomePage
