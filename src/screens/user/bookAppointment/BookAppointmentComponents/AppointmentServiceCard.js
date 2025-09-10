import { View, Text, Pressable } from 'react-native'
import React, { memo, useState } from 'react'
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

const AppointmentServiceCard = () => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const [selectAllToggle, setSelectAllToggle] = useState(false);
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: 70, height: 70, borderWidth: 1, borderColor: themeColor.border, borderRadius: 10 }}>

                </View>
                <View>
                    <Text style={styles.largeText}>Hair Cutting</Text>
                    <Text style={styles.text}>$40</Text>
                    <Pressable>
                        <Text style={[styles.text, { textDecorationLine: 'underline', fontSize: 10 }]}>View All Design</Text>
                    </Pressable>
                </View>
            </View>
            <Pressable onPress={() => setSelectAllToggle(!selectAllToggle)}>
                <Icon name={selectAllToggle ? 'toggle-on' : 'toggle-off'} size={42} color={selectAllToggle ? themeColor.primary : themeColor.icon} />
            </Pressable>
        </View>
    )
}

export default memo(AppointmentServiceCard);