import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColorTheme } from '../../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const SearchInput = ({ onChangeText, onSubmitEditing, value }) => {
    const { themeColor, fontFamily } = useColorTheme();
    const { t } = useTranslation();
    return (

        <View style={{ width: '100%', borderRadius: 12, borderWidth: 1, borderColor: themeColor.border, flexDirection: 'row', alignItems: 'center', gap: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
            <Icon name="search" size={28} color={themeColor.iconSecondary} />
            <TextInput
                style={{ width: '80%', color: themeColor.primaryText, fontFamily: fontFamily }}
                placeholderTextColor={themeColor.secondaryText}
                placeholder="Search services..."
                value={value}
                onChangeText={onChangeText}
                returnKeyType="search"
                onSubmitEditing={onSubmitEditing}
            />
        </View>



    )
}

export default SearchInput