import uuid from 'react-native-uuid'

export interface IApartment {
	id: string
	title: string
	subtitle: string
	reviewValue: number
	price: number
	pricePrefix: string
	photos: string[]
}

interface IDateProps {
	appartments: IApartment[]
}

export const dataExp: IDateProps = {
	appartments: [
		{
			id: String(uuid.v4()),
			title: 'Nakoa Apartment',
			subtitle: 'Sudirman, Central Jakarta',
			price: 728,
			pricePrefix: '$',
			reviewValue: 4.5,
			photos: [
				'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg',
				'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg',
				'https://cdn.pixabay.com/photo/2014/10/22/16/38/buildings-498198_1280.jpg'
			]
		},
		{
			id: String(uuid.v4()),
			title: 'Nacary Apartment',
			subtitle: 'Central Jakatara',
			price: 925,
			pricePrefix: '$',
			reviewValue: 4.8,
			photos: [
				'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg',
				'https://cdn.pixabay.com/photo/2017/01/30/10/03/book-2020460_1280.jpg',
				'https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg'
			]
		},
		{
			id: String(uuid.v4()),
			title: 'Nakoa Appartment',
			subtitle: 'Sudirman, Central Jakarta',
			price: 728,
			pricePrefix: '$',
			reviewValue: 4.5,
			photos: [
				'https://cdn.pixabay.com/photo/2016/01/19/17/32/apartment-building-1149751_1280.jpg',
				'https://cdn.pixabay.com/photo/2016/11/18/15/54/apartment-1835482_1280.jpg',
				'https://cdn.pixabay.com/photo/2015/02/09/14/56/table-629772_1280.jpg'
			]
		}
	]
}

export function getApartmentById(id: string): IApartment | undefined {
	return dataExp.appartments.find((a) => a.id === id)
}
