import { View, Text, Pressable, Alert } from 'react-native'
import React, { memo } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CustomSearchBar = () => {
    const { themeColor, fontFamily } = useSelector(state => state.theme);
    const { t } = useTranslation();
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('SearchScreen')} style={{ width: '100%', borderRadius: 12, borderWidth: 1, borderColor: themeColor.border, flexDirection: 'row', alignItems: 'center', gap: 20, padding: 10 }}>
            <Icon name="search" size={28} color={themeColor.iconSecondary} />
            <Text style={{ color: themeColor.secondaryText, fontSize: 16, fontFamily: fontFamily,}}>{t('search')}</Text>
        </Pressable>
    )
}

export default memo(CustomSearchBar)