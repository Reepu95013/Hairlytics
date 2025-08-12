import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../context/ThemeContext';
import createStyles from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomOfferCard = () => {
    const { t } = useTranslation();
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    return (
        <View style={{ width: 280, height: 'auto' }}>
            <ImageBackground source={require('../../assets/images/haircuting.png')} style={{ width: 280, height: 180, padding: 8, }} imageStyle={{ borderRadius: 12 }}>
                <View style={{ backgroundColor: themeColor.surface, borderRadius: 6, width: 64, height: 32, gap: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: themeColor.primary }}>30% Off</Text>
                </View>
            </ImageBackground>
            <View style={{ width: 280 }}>
                <Text style={styles.largeText}>Glam Goddess Salon</Text>
                <Text style={styles.text}>123 Ramnager Ludhiana Punjab India 141010.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                        <Icon name={'schedule'} size={14} color={themeColor.secondaryText} />
                        <Text style={{ fontWeight: "400", fontSize: 12, color: themeColor.secondaryText, fontFamily: fontFamily }}>9:00am : 5:00pm</Text>
                    </View>
                    <Pressable style={{ backgroundColor: themeColor.primary, padding: 5, borderRadius: 5 }}>
                        <Text style={{ fontWeight: "600", fontSize: 14, color: themeColor.primaryText, fontFamily: fontFamily }}>Book Now</Text>
                    </Pressable>
                </View>

            </View>

        </View>
    )
}

export default CustomOfferCard