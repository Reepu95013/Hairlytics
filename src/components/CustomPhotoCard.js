import { View, Text, Image } from 'react-native'
import React, { memo } from 'react'

import createStyles from '../constants/styles';
import { useSelector } from 'react-redux';

const CustomPhotoCard = () => {
    const { themeColor, fontFamily } = useSelector(state => state.theme);
    const styles = createStyles(themeColor, fontFamily);
    return (
        <View style={{ width: 300, height: 200, backgroundColor: themeColor.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center', }}>
            <Image source={require('../../assets/images/haircuting.png')} style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius:12 }} />
        </View>
    )
}

export default memo(CustomPhotoCard);