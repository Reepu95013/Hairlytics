import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useColorTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import createStyles from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomHeaderLayout = ({ children, screenName, CustomHeader, CustomBottom, customBack }) => {
    const { themeColor, fontFamily } = useColorTheme();
    const navigation = useNavigation();
    const styles = createStyles(themeColor, fontFamily);
    return (
        <SafeAreaView style={[customstyles.container, { backgroundColor: themeColor.background }]}>

            <>
                {CustomHeader ? (<CustomHeader />) :
                    (<View style={{ marginTop: 60, marginBottom: 12, marginHorizontal: 16, flexDirection: 'row', gap: 16 }}>
                        <TouchableOpacity onPress={() => customBack ? customBack() : navigation.goBack()}>
                            <Icon name='chevron-left' size={32} color={themeColor.iconSecondary} />
                        </TouchableOpacity>
                        <Text style={styles.header}>{screenName || ''}</Text>
                    </View>)
                }
            </>
            <View style={customstyles.content}>
                {children}
            </View>
            {CustomBottom && <CustomBottom />}
        </SafeAreaView>
    )
}

export default CustomHeaderLayout

const customstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    content: {
        flex: 1,
        marginHorizontal: 12
    },
});