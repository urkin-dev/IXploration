import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/core'

export type RootTabParamList = {
	Home: undefined
	Favorites: undefined
}

//Home Screen navigation props
type HomeScreenRouteProp = RouteProp<RootTabParamList, 'Home'>
type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>

export interface IHomeNavigationProp {
	route: HomeScreenRouteProp
	navigation: HomeScreenNavigationProp
}

//Favorite Screen navigation props
type FavoriteScreenRouteProp = RouteProp<RootTabParamList, 'Favorites'>
type FavoriteScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Favorites'>

export interface IFavoriteNavigationProp {
	route: FavoriteScreenRouteProp
	navigation: FavoriteScreenNavigationProp
}
