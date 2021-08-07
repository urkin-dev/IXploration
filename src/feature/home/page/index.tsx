import { IHomeNavigationProp } from '@feature/app'
import { RoutesEnum } from 'feature/app/lib/Routes'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SectionTitleContainer } from 'ui'
import { ApartmentCard } from '@feature/apartment'
import Slider from './components/Slider'

interface IProps extends IHomeNavigationProp {}

const HomePage = ({ route, navigation }: IProps) => {
	const onApartmentPress = () => {
		navigation.navigate('ApartmentPage')
	}

	return (
		<ScrollView style={StyleSheet.absoluteFill}>
			<View style={styles.HomeContainer}>
				<TextInput style={styles.StyledSearch} placeholder="Find rent house near you" />
				<Slider />
				<SectionTitleContainer
					style={{ marginTop: 30, marginBottom: 20 }}
					title="Recommended For You"
					linkText="View All"
					linkRef={RoutesEnum.Recommended}
				/>
				<ApartmentCard
					title="Some title"
					subtitle="Some subtitle"
					price={345}
					pricePrefix="$"
					reviewValue={5}
					isLastChild={false}
					horizontal
					onPress={onApartmentPress}
				/>
				<ApartmentCard
					title="Some title"
					subtitle="Some subtitle"
					price={345}
					pricePrefix="$"
					reviewValue={5}
					isLastChild={false}
					horizontal
					onPress={onApartmentPress}
				/>
				<ApartmentCard
					title="Some title"
					subtitle="Some subtitle"
					price={345}
					pricePrefix="$"
					reviewValue={5}
					isLastChild={false}
					horizontal
					onPress={onApartmentPress}
				/>
				<ApartmentCard
					title="Some title"
					subtitle="Some subtitle"
					price={345}
					pricePrefix="$"
					reviewValue={5}
					isLastChild
					horizontal
					onPress={onApartmentPress}
				/>
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
