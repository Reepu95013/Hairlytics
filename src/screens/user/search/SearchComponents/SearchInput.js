import { View, Text, TextInput } from 'react-native'
import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const SearchInput = ({ onChangeText, onSubmitEditing, value }) => {
    const { themeColor, fontFamily } = useSelector(state => state.theme);
    const { t } = useTranslation();
    return (

        <View style={{ width: '100%', borderRadius: 12, borderWidth: 1, borderColor: themeColor.border, flexDirection: 'row', alignItems: 'center', gap: 20, paddingHorizontal: 10, paddingVertical: 3 }}>
            <Icon name="search" size={28} color={themeColor.iconSecondary} />
            <TextInput
                style={{ width: '80%', color: themeColor.text, fontFamily: fontFamily }}
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

export default memo(SearchInput)