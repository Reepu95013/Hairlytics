import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'

import { useNavigation } from '@react-navigation/native';
import createStyles from '../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux';

const CustomHeaderLayout = ({ children, screenName, CustomHeader, CustomBottom, customBack }) => {
    const { themeColor, fontFamily } = useSelector(state => state.theme);
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

export default memo(CustomHeaderLayout)