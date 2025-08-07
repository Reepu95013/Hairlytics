import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useColorTheme } from '../context/ThemeContext';

const CustomHeader = () => {
    const { themeColor } = useColorTheme();
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 50, marginBottom:12, marginHorizontal: 16 }}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Icon name='menu' size={32} color={themeColor.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader