import React, {Component, PropTypes} from 'react';
import {
    Image,
    View,
    TouchableWithoutFeedback
} from 'react-native';

export default class CropImage extends Component{
    render() {

        let {source, crop, width, height, children, style, onPress} = this.props;

        crop = crop || source.crop || {};

        crop.top = crop.top || 0;
        crop.left = crop.left || 0;
        crop.width = crop.width || width;
        crop.height = crop.height || height;

        return (
                <View style={[{
                    overflow: 'hidden',
                    height: crop.height,
                    width: crop.width,
                    backgroundColor: 'transparent'
                }, style]}>
                    <Image
                        onPress={onPress} 
                        style={{
                            marginTop: crop.top * -1,
                            marginLeft: crop.left * -1,
                            width: width,
                            height: height
                        }}
                        source={source} 
                        resizeMode='contain'
                    >
                        {children}
                    </Image>
                </View>
        );
    }

    static propTypes = {
        source: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.node
        ]).isRequired,
        crop: PropTypes.object,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        onPress: PropTypes.func,
        style: PropTypes.object
    };

    static defaultProps = {
        onPress: ()=>{},
        style:{}
    };
}

