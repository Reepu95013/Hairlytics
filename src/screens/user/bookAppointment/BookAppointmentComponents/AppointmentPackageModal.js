import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet, Pressable, FlatList } from 'react-native'
import React, { memo } from 'react'
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';

const AppointmentPackageModal = ({ visible, setVisible }) => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);

    const renderItem = ({ item }) => (
        <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: themeColor.border, padding: 10, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: 70, height: 70, borderWidth: 1, borderColor: themeColor.border, borderRadius: 10 }}>

                </View>
                <View>
                    <Text style={styles.largeText}>Smart Boy Pakage</Text>
                    <Text style={[styles.text, { fontSize: 11 }]}>Hair Cutting, Saving, premium facial</Text>
                    <Text style={styles.text}>Price $60</Text>
                </View>
            </View>

        </Pressable>
    )
    return (
        <Modal transparent visible={visible} animationType="fade" onRequestClose={() => setVisible(false)}>
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <View style={customStyles.container}>
                    <View style={[customStyles.box, { backgroundColor: themeColor.secondaryBackground }]}>
                        <Text style={styles.largeText}>Select Package</Text>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            renderItem={renderItem}
                            contentContainerStyle={{gap:10, paddingVertical:10}}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}


const customStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '90%',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        maxHeight:'70%'
    },
});

export default memo(AppointmentPackageModal);
