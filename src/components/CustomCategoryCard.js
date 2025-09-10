import { View, Text, Image } from 'react-native'
import React, { memo } from 'react'
import { useColorTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const CustomCategoryCard = () => {
    const { t } = useTranslation();
    const { themeColor, fontFamily } = useColorTheme();
    return (
        <View style={{ width: 68, height: "auto", gap: 2 }}>
            <View style={{ width: 68, height: 68, borderWidth: 1, borderColor: 'white', borderRadius: 10 }}>
                <Image source={require('../../assets/images/haircuting.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }} />
            </View>
            <Text style={{ color: themeColor.primaryText, textAlign: 'center', fontSize: 12, fontFamily: fontFamily }}>{t('hair_cut')}</Text>
        </View>

    )
}


export default memo(CustomCategoryCard);
