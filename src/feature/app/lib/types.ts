import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/core'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootTabParamList = {
	Home: undefined
	Favorites: undefined
}

export type RootStackParamList = {
	BottomTabsNav: RootTabParamList
	ApartmentPage: { id: string }
}

//Home Screen navigation props
type HomeScreenRouteProp = RouteProp<RootTabParamList, 'Home'>
type HomeScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<RootTabParamList, 'Home'>,
	StackNavigationProp<RootStackParamList>
>

export interface IHomeNavigationProp {
	route: HomeScreenRouteProp
	navigation: HomeScreenNavigationProp
}

//Favorite Screen navigation props
type FavoriteScreenRouteProp = RouteProp<RootTabParamList, 'Favorites'>
type FavoriteScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<RootTabParamList, 'Favorites'>,
	StackNavigationProp<RootStackParamList>
>

export interface IFavoriteNavigationProp {
	route: FavoriteScreenRouteProp
	navigation: FavoriteScreenNavigationProp
}

//Favorite Screen navigation props
type ApartmentScreenRouteProp = RouteProp<RootStackParamList, 'ApartmentPage'>
type ApartmentScreenNavigationProp = CompositeNavigationProp<
	StackNavigationProp<RootStackParamList, 'ApartmentPage'>,
	BottomTabNavigationProp<RootTabParamList>
>

export interface IApartmentNavigationProp {
	route: ApartmentScreenRouteProp
	navigation: ApartmentScreenNavigationProp
}
