import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import { useColorTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

const CustomSearchBar = () => {
    const { themeColor } = useColorTheme();
    const { t } = useTranslation();
    return (
        <Pressable onPress={()=>Alert.alert('search bar clicked')} style={{ width: '100%', borderRadius: 12, borderWidth: 1, borderColor: themeColor.icon, flexDirection:'row', alignItems:'center', gap:20, padding:10 }}>
            <Icon name="search" size={28} color={themeColor.iconSecondary} />
            <Text style={{color:themeColor.secondaryText, fontSize:18, fontFamily: 'Merienda-VariableFont_wght'}}>{t('search')}</Text>
        </Pressable>
    )
}

export default CustomSearchBar