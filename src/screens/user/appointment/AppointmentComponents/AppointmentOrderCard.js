import { View, Text, Pressable } from 'react-native'
import React, { memo } from 'react'
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AppointmentOrderCard = () => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const navigation = useNavigation();
    return (
        <View style={{ borderWidth: 1, borderRadius: 12, padding: 10, borderColor: themeColor.border, gap: 10, backgroundColor: themeColor.secondaryBackground }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                    <Icon name={'schedule'} size={14} color={themeColor.success} />
                    <Text style={[styles.text, { color: themeColor.success }]}>upcomming</Text>
                    <Text style={[styles.text, { color: themeColor.success }]}>7:00am</Text>
                </View>

                <Pressable onPress={() => navigation.navigate('AppointmentViewScreen')} style={{ paddingHorizontal: 10, borderWidth: 1, paddingVertical: 4, borderRadius: 10, backgroundColor: themeColor.primary }}>
                    <Text style={[styles.text, { color: themeColor.primaryText }]}>View</Text>
                </Pressable>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: '30%', gap: 10 }}>

                    <View style={{ width: 80, height: 80, borderWidth: 1, borderRadius: 10, borderColor: themeColor.border }}>

                    </View>

                </View>
                <View style={{ width: '70%' }}>
                    <View>
                        <Text style={styles.header}>H-Style Hair Shop</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text}>Invoice No.:</Text>
                            <Text style={styles.text}>1234</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text}>Date:</Text>
                            <Text style={styles.text}>15/07/2025</Text>
                        </View>
                    </View>

                </View>

            </View>

        </View>
    )
}

export default memo(AppointmentOrderCard);