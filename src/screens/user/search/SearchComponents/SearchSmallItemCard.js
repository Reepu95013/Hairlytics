import { View, Text, Image } from 'react-native'
import React, { memo } from 'react'
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';

const SearchSmallItemCard = () => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    return (
        <View>
            <View style={{ width: 120, height: 'auto', position: 'relative' }}>
                <Image source={require('../../../../../assets/images/haircuting.png')} style={{ width: 132, height: 86, borderRadius: 6 }} />
                <View style={{ backgroundColor: themeColor.background, width: 60, borderRadius: 12, marginTop: -10, padding: 4 }}>
                    <View style={{ backgroundColor: themeColor.success, width: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={styles.text}>4/5 *</Text>
                    </View>
                </View>
                <View style={{ padding: 5, backgroundColor: themeColor.background, position: 'absolute', borderRadius: 6, marginTop: 6, marginLeft: 2, }}>
                    <Text style={{ fontSize: 10, color: themeColor.primaryText, fontWeight: '400' }}>Flat 50% Off</Text>
                </View>
            </View>
            <Text style={styles.text}>Hair Cutting</Text>
        </View>
    )
}

export default memo(SearchSmallItemCard);