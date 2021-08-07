import { IHomeNavigationProp } from '@feature/app'
import { RoutesEnum } from 'feature/app/lib/Routes'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SectionTitleContainer } from 'ui'
import { ApartmentCard } from '@feature/apartment'
import Slider from './components/Slider'
import { dataExp } from 'api'

interface IProps extends IHomeNavigationProp {}

const HomePage = ({ route, navigation }: IProps) => {
	//TODO: Add params
	const onApartmentPress = (id: string) => {
		navigation.navigate('ApartmentPage', { id })
	}

	return (
		<ScrollView style={StyleSheet.absoluteFill}>
			<View style={styles.HomeContainer}>
				<TextInput style={styles.StyledSearch} placeholder="Find rent house near you" />
				<Slider onCardPress={onApartmentPress} />
				<SectionTitleContainer
					style={{ marginTop: 30, marginBottom: 20 }}
					title="Recommended For You"
					linkText="View All"
					linkRef={RoutesEnum.Recommended}
				/>
				{dataExp.appartments.map((a, idx) => (
					<ApartmentCard
						key={a.id}
						id={a.id}
						isLastChild={idx === dataExp.appartments.length - 1}
						title={a.title}
						subtitle={a.subtitle}
						reviewValue={a.reviewValue}
						price={a.price}
						pricePrefix={a.pricePrefix}
						photos={a.photos}
						horizontal
						onPress={onApartmentPress}
					/>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	HomeContainer: {
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 30,
		backgroundColor: '#F2F2F2'
	},
	StyledSearch: {
		backgroundColor: '#e6e6e6',
		borderWidth: 1,
		borderColor: '#dadada',
		borderRadius: 30,
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		fontSize: 18
	}
})

export default HomePage
