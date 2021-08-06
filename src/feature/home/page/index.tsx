import { IHomeNavigationProp } from '@feature/app'
import { RoutesEnum } from 'feature/app/lib/Routes'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SectionTitleContainer } from 'ui'
import ApartmentCard from './components/ApartmentCard'
import Slider from './components/Slider'

interface IProps extends IHomeNavigationProp {}

const HomePage = ({ route, navigation }: IProps) => {
	return (
		<ScrollView style={styles.HomeContainer}>
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
			/>
			<ApartmentCard
				title="Some title"
				subtitle="Some subtitle"
				price={345}
				pricePrefix="$"
				reviewValue={5}
				isLastChild={false}
				horizontal
			/>
			<ApartmentCard
				title="Some title"
				subtitle="Some subtitle"
				price={345}
				pricePrefix="$"
				reviewValue={5}
				isLastChild={false}
				horizontal
			/>
			<ApartmentCard
				title="Some title"
				subtitle="Some subtitle"
				price={345}
				pricePrefix="$"
				reviewValue={5}
				isLastChild
				horizontal
			/>
		</ScrollView>
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
