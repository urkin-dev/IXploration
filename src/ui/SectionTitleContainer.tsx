import React from 'react'
import { Link } from '@react-navigation/native'
import { RoutesEnum } from 'feature/app/lib/Routes'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

interface IProps {
	title: string
	linkText?: string
	linkRef?: RoutesEnum
	style?: ViewStyle
}

const SectionTitleContainer = ({ title, linkText, linkRef, style }: IProps) => {
	return (
		<View style={{ ...styles.TitleContainer, ...style }}>
			<Text style={styles.SectionTitle}>{title}</Text>
			<Link style={styles.SectionLink} to={`/${linkRef}`}>
				{linkText}
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	TitleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	SectionTitle: {
		fontWeight: 'bold',
		fontSize: 22
	},
	SectionLink: {
		color: '#5F82DE',
		fontSize: 18,
		fontWeight: 'bold',
		alignSelf: 'flex-end'
	}
})

export default SectionTitleContainer
