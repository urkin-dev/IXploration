import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native'
import StarIcon from '@assets/star.svg'
import FavoriteIcon from '@assets/nav/favorite.svg'
import { IApartment } from 'api'

interface IProps extends IApartment {
	isLastChild: boolean
	horizontal: boolean
	onPress?: (id: string) => void
}

const ApartmentCard = ({
	id,
	isLastChild,
	title,
	subtitle,
	reviewValue,
	price,
	pricePrefix,
	horizontal,
	onPress,
	photos
}: IProps) => {
	const onCardPress = () => {
		if (onPress) onPress(id)
	}

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onCardPress}
			style={{
				...styles.CardContainer,
				marginRight: !horizontal && !isLastChild ? 20 : 0,
				marginBottom: horizontal && !isLastChild ? 20 : 0,
				flexDirection: horizontal ? 'row' : 'column'
			}}>
			<View style={{ padding: horizontal ? 20 : 0, justifyContent: 'center', alignItems: 'center' }}>
				<Image
					style={{ ...styles.StyledImage, width: horizontal ? 128 : 300, height: horizontal ? 128 : 200 }}
					source={{ uri: photos[0] }}
				/>
			</View>
			<View style={styles.CardContent}>
				<Text style={{ fontSize: horizontal ? 18 : 24, fontWeight: 'bold' }}>{title}</Text>
				<View
					style={{
						...styles.CardRow,
						flexDirection: horizontal ? 'column' : 'row',
						alignItems: horizontal ? 'flex-start' : 'center'
					}}>
					<Text style={{ ...styles.CardSubtitle, fontSize: horizontal ? 16 : 18 }}>{subtitle}</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<StarIcon width={15} height={15} style={{ marginRight: 5 }} />
						<Text style={styles.CardReviewValue}>{reviewValue}</Text>
					</View>
				</View>
				<View style={{ ...styles.CardRow, marginTop: 20, flex: 1, alignItems: 'flex-end' }}>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{pricePrefix}</Text>
						<Text style={{ fontSize: 28, fontWeight: 'bold' }}>{price}</Text>
					</View>
					<TouchableOpacity style={styles.FavoriteButton} activeOpacity={0.6}>
						<FavoriteIcon width={15} height={15} fill="#fff" />
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
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
		resizeMode: 'cover'
	},
	CardContent: {
		padding: 15,
		flex: 1
	},
	CardSubtitle: {
		color: '#9B9FAF'
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
		marginTop: 10,
		borderColor: 'red'
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
