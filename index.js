import React, {Component, PropTypes} from 'react';
import {
    Image,
    View
} from 'react-native';

/**
 * CropImage
 * 处理雪碧图
 * @class CropImage
 */
export default class CropImage extends Component{
    render() {

        let {source, crop, width, height, onPress} = this.props;

        crop = crop || source.crop || {};

        crop.top = crop.top || 0;
        crop.left = crop.left || 0;
        crop.width = crop.width || width;
        crop.height = crop.height || height;

        return (
                <View style={{
                    overflow: 'hidden',
                    height: crop.height,
                    width: crop.width,
                    backgroundColor: 'transparent'
                }}>
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
        onPress: PropTypes.func
    };

    static defaultProps = {
        onPress: ()=>{}
    };
}

