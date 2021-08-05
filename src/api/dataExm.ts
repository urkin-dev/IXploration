export interface IApartment {
	title: string
	subtitle: string
	reviewValue: number
	price: number
	pricePrefix: string
}

interface IDateProps {
	appartments: IApartment[]
}

export const dataExp: IDateProps = {
	appartments: [
		{
			title: 'Nakoa Apartment',
			subtitle: 'Sudirman, Central Jakarta',
			price: 728,
			pricePrefix: '$',
			reviewValue: 4.5
		},
		{
			title: 'Nacary Apartment',
			subtitle: 'Central Jakatara',
			price: 925,
			pricePrefix: '$',
			reviewValue: 4.8
		},
		{
			title: 'Nakoa Appartment',
			subtitle: 'Sudirman, Central Jakarta',
			price: 728,
			pricePrefix: '$',
			reviewValue: 4.5
		}
	]
}
