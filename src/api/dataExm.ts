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
				'https://pixabay.com/get/g3440418bafd34b38cf37b151f267b358b4a1d8d1851a1cdd9fcb2dcdb2cb89fcd657828f0accbcae5d8ff1c9c1d22b3c_1920.jpg',
				'https://pixabay.com/get/gb0b1bc2312f280b944b8a6151f7bae9ff3cdcc050c45b9164830a49171c796efa1c30fe00be6e6efd1e5056dd322330e_1280.jpg',
				'https://pixabay.com/get/g798d2696534b96b484b8707d9ad77bf3ec9f06bb94f082931f1a49cbf1d22e2617571dd6885cc870fc511173c83960bc_1280.jpg'
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
				'https://pixabay.com/get/g3aaf4b1bebbd59b5695f190c7c1670271d2a9a05799e642212660664ac90d4a2fc884063b482ee5ea54a007fd39444d8_1920.jpg',
				'https://pixabay.com/get/geaa8c76044d9ccf03607da1f5c590904de5baf4cae2aec931565af683e11f673b776e960f5f17284a2c470c29785494d_1280.jpg',
				'https://pixabay.com/get/g3ba7dd938b78ac1da90fc2298ed7d9c5f9cc49e7dfe92821b248b0ec0e6825552e8718560cf79ae70cf13a2dd559a4c3_1280.jpg'
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
				'https://pixabay.com/get/g9ff094f2bc81fb98e98dd7f659a355367a56307555d7d8009e4244f1166a8baca4b6c539c500c316d4011a1134686845_1280.jpg',
				'https://pixabay.com/get/g978ddfec9863873ed8822f9713d066fd8a18ff98482d711133935550d98bfffec442e031fe609bf26eeff591bbbc5ec1_1280.jpg',
				'https://pixabay.com/get/g99da2bfb8af654cb4cba689ff70519aab0c36873e4e9174bb13dccff0aa62266ba44cb10ea9f5794dbd727e570bbeceb_1280.jpg'
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
				'https://pixabay.com/get/g94cd2f3d7e25bc6ceeef8a66c2c3680da0b733f311094408538859fecea55afd7a6f865f201f384fe395812355529c2c_1280.jpg',
				'https://pixabay.com/get/g86fdec4eda5c98d534946a71899c368a655e45bce9b83231013371d7e2b39d79c41bcebabff5798b70178f78b99b418a_1280.jpg',
				'https://pixabay.com/get/g48ea56220b4fe14e29936a47cab4d1f8dce3437175e1dc605e705f3d527f81de3c261aaea12405b2fc928622fb1fe68d_1280.jpg'
			]
		}
	]
}
