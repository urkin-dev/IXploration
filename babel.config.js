module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'@lib': './src/lib/',
					'@assets': './src/assets',
					'@feature/app': './src/feature/app/shared',
					'@feature/home': './src/feature/home/shared',
					'@feature/favorite': './src/feature/favorite/shared',
					'@feature/apartment': './src/feature/apartment/shared'
				}
			}
		]
	]
}
