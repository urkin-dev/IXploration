import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native'
import StarIcon from '@assets/star.svg'
import FavoriteIcon from '@assets/nav/favorite.svg'
import { IApartment } from 'api'

interface IProps extends IApartment {
	isLastChild: boolean
}

const ApartmentCard = ({ isLastChild, title, subtitle, reviewValue, price, pricePrefix }: IProps) => {
	return (
		<View style={{ ...styles.CardContainer, marginRight: isLastChild ? 0 : 20 }}>
			<Image style={styles.StyledImage} source={require('@assets/Apartment.jpg')} />
			<View style={styles.CardContent}>
				<Text style={styles.CardTitle}>{title}</Text>
				<View style={styles.CardRow}>
					<Text style={styles.CardSubtitle}>{subtitle}</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<StarIcon width={15} height={15} style={{ marginRight: 5 }} />
						<Text style={styles.CardReviewValue}>{reviewValue}</Text>
					</View>
				</View>
				<View style={{ ...styles.CardRow, marginTop: 20 }}>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{pricePrefix}</Text>
						<Text style={{ fontSize: 28, fontWeight: 'bold' }}>{price}</Text>
					</View>
					<TouchableOpacity style={styles.FavoriteButton} activeOpacity={0.6}>
						<FavoriteIcon width={15} height={15} fill="#fff" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default ApartmentCard

const styles = StyleSheet.create({
	CardContainer: {
		borderRadius: 15,
		backgroundColor: '#fff',
		flex: 1
	},
	StyledImage: {
		borderRadius: 15,
		resizeMode: 'cover',
		height: 200,
		width: 300
	},
	CardTitle: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	CardContent: {
		padding: 15
	},
	CardSubtitle: {
		color: '#9B9FAF',
		fontSize: 18
	},
	CardReviewValue: {
		color: '#000',
		fontSize: 16,
		fontWeight: 'bold'
	},
	CardRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10
	},
	FavoriteButton: {
		width: 40,
		height: 40,
		borderRadius: 50 / 2,
		backgroundColor: '#4976E9',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
