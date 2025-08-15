import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useColorTheme } from '../context/ThemeContext';
import createStyles from '../constants/styles';

const CustomCard = () => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    return (
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
    )
}

export default CustomCard