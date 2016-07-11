# react-native-cropimage

处理雪碧图

### Getting started

安装

	npm install react-native-cropimage --save

使用

	// ...
	
	import CropImage from 'react-native-cropimage';
	
	class IconHome extends Component{
		return (
			<CropImage
				source={{
					uri: 'http://pic.c-ctrip.com/platform/h5/public/ico_bu_mini@2x.160225.png'
				}}
				crop={{
					top: 0,
					left: 0,
					width: 20,
					height: 20
				}}
				width={60}
				height={120}							
			/>
		)
	}


### API
- **source** - (Object) - 图片源，必须
- **width** - (Number) - 图片宽度，必须
- **height** - (Number) - 图片高度，必须
- **crop** - (Object):
	- **top** - (Number) - 裁剪起点 y轴，以左上角为起点，默认0
	- **left** - (Number) - 裁剪起点 x轴，以左上角为起点，默认0
	- **width** - (Number) - 裁剪宽度，默认图片宽度
	- **height** - (Number) - 裁剪高度，默认图片高度
- **onPress** - (Function) - 点击图片回调（一般用不到，在用到的组件里写事件）

