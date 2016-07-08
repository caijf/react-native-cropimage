import React, {Component} from 'react';

import {
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
					top: 0,
					left: 0,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}
				style={{
					backgroundColor: 'red'
				}}				
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
					top: 20,
					left: 0,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}
				style={{
					backgroundColor: 'blue'
				}}				
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
					top: 40,
					left: 0,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}
				style={{
					backgroundColor: 'green'
				}}				
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
					<View>
						<IconHotel />
					</View>
				</TouchableHighlight>

				<TouchableHighlight onPress={()=>{alert('click train icon')}}>
					<View>
						<IconTrain />
					</View>
				</TouchableHighlight>


				<TouchableHighlight onPress={()=>{alert('click car icon')}}>
					<View>
						<IconCar />
					</View>
				</TouchableHighlight>
			</View>
		)
	}
}


