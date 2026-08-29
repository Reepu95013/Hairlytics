import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const CustomHeader = () => {
    const { t } = useTranslation();
    const { themeColor,fontFamily } = useSelector(state => state.theme);
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 60, marginBottom: 12, marginHorizontal: 16, flexDirection: 'row', gap: 16 }}>

            <View>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ borderColor: themeColor.icon, borderWidth: 1, padding: 5, borderRadius: 10 }}>
                    <Icon name='menu' size={32} color={themeColor.iconSecondary} />
                </TouchableOpacity>

            </View>


            <View>
                <Text style={{ fontSize: 14, fontWeight: '600', fontFamily: fontFamily, color: themeColor.secondaryText }}>{t('hi')}, Reepu</Text>
                <Text style={{ fontSize: 18, fontWeight: '600', fontFamily: fontFamily, color: themeColor.primaryText }}>{t('good_morning')}</Text>
            </View>
        </View>
    )
}

export default memo(CustomHeader)