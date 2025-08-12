import { View, Text, Image } from 'react-native'
import React from 'react'
import { useColorTheme } from '../context/ThemeContext';
import createStyles from '../constants/styles';

const CustomServiceCard = ({ item }) => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    return (
        <View style={{ width: 100, height: 'auto', gap: 6 }}>
            <View style={{ width: 100, height: 100, backgroundColor: themeColor.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={item?.image || require('../../assets/images/masaj.png')} style={{ width: '100%', height: '100%', resizeMode: 'center' }} />
            </View>
            <Text style={[styles.largeText, { textAlign: 'center' }]}>Facial</Text>
        </View>
    )
}

export default CustomServiceCard