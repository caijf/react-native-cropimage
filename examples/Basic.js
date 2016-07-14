import React, {Component} from 'react';

import {
	AppRegistry,
	Platform,
	View,
	TouchableHighlight
} from 'react-native';

import CropImage from 'react-native-cropimage';

class IconHotel extends Component{
	render(){
		return(
			<CropImage
				source={require('./icon-business.png')}
				crop={{
					top: -1,
					left: -1,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}
			/>
		)
	}
}

class IconTrain extends Component{
	render(){
		return(
			<CropImage
				source={require('./icon-business.png')}
				crop={{
					top: 19,
					left: -1,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}
			/>
		)
	}
}

class IconCar extends Component{
	render(){
		return(
			<CropImage
				source={require('./icon-business.png')}
				crop={{
					top: 39,
					left: -1,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}
			/>
		)
	}
}

export default class MyApp extends Component{
	render(){
		return(
			<View style={[
				Platform.OS === 'ios' ? {marginTop: 20} : null,
				{
					flexDirection: 'row',
					alignItems: 'center'
				}
			]}>
				<TouchableHighlight onPress={()=>{alert('click hotel icon')}}>
					<View style={{ backgroundColor: 'red'}}>
						<IconHotel />
					</View>
				</TouchableHighlight>

				<TouchableHighlight onPress={()=>{alert('click train icon')}}>
					<View style={{ backgroundColor: 'blue'}}>
						<IconTrain />
					</View>
				</TouchableHighlight>


				<TouchableHighlight onPress={()=>{alert('click car icon')}}>
					<View style={{ backgroundColor: 'black'}}>
						<IconCar />
					</View>
				</TouchableHighlight>
			</View>
		)
	}
}


