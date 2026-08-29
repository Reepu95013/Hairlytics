import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

import createStyles from '../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CustomItemCard = ({ width, height }) => {
    const { t } = useTranslation();
    const { themeColor, fontFamily } = useSelector(state => state.theme);
    const styles = createStyles(themeColor, fontFamily);
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('SalonScreen')} style={{ width: width || 280, height: 'auto' }}>
            <ImageBackground source={require('../../assets/images/haircuting.png')} style={{ width: width || 280, height: height || 180, paddingVertical: 8, flexDirection: 'row', justifyContent: 'space-between' }} imageStyle={{ borderRadius: 12, width:'100%' }}>
                <View style={{ backgroundColor: themeColor.surface, borderRadius: 6, width: 64, height: 32, gap: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginLeft:8 }}>
                    <Icon name={'star-rate'} size={16} color={themeColor.primary} />
                    <Text style={{ color: themeColor.primary }}>5/5</Text>
                </View>
                <Pressable style={{ backgroundColor: themeColor.surface, width: 38, height: 38, alignItems: 'center', justifyContent: 'center', borderRadius: 6 , marginRight:8}}>
                    <Icon name={'favorite'} size={24} color={themeColor.primary} />
                </Pressable>
            </ImageBackground>
            <View style={{ width: 280 }}>
                <Text style={styles.largeText}>Glam Goddess Salon</Text>
                <Text style={styles.text}>123 Ramnager Ludhiana Punjab India 141010.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                        <Icon name={'schedule'} size={14} color={themeColor.secondaryText} />
                        <Text style={{ fontWeight: "400", fontSize: 12, color: themeColor.secondaryText, fontFamily: fontFamily }}>9:00am : 5:00pm</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "600", fontSize: 14, color: themeColor.primaryText, fontFamily: fontFamily }}>$10.00 - $35.00</Text>
                    </View>
                </View>

            </View>

        </Pressable>
    )
}

export default memo(CustomItemCard);