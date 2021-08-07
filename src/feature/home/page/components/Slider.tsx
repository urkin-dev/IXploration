import { RoutesEnum } from 'feature/app/lib/Routes'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SectionTitleContainer } from 'ui'
import { ApartmentCard } from '@feature/apartment'
import { dataExp } from 'api'

//TODO: Create json object with data for apartment
const Slider = () => {
	return (
		<View style={styles.SliderContainer}>
			<SectionTitleContainer title="Popular Nearest You" linkText="View All" linkRef={RoutesEnum.Popular} />
			<ScrollView
				horizontal
				style={{ marginTop: 20 }}
				showsHorizontalScrollIndicator={false}
				snapToInterval={300}
				decelerationRate="normal">
				{dataExp.appartments.map((a, idx) => (
					<ApartmentCard
						key={idx}
						isLastChild={idx === dataExp.appartments.length - 1}
						title={a.title}
						subtitle={a.subtitle}
						reviewValue={a.reviewValue}
						price={a.price}
						pricePrefix={a.pricePrefix}
						horizontal={false}
					/>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	SliderContainer: {
		marginTop: 30
	}
})

export default Slider
