import React from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CustomCalendar from './CustomCalendar';
import { useColorTheme } from '../context/ThemeContext';

const CustomCalendarModal = ({ visible, setVisible }) => {
     const { themeColor, fontFamily } = useColorTheme();
    return (
        <Modal transparent visible={visible} animationType="fade" onRequestClose={() => setVisible(false)}>
            <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <View style={styles.container}>
                    <View style={[styles.box, {backgroundColor:themeColor.secondaryBackground}]}>
                        <CustomCalendar />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default CustomCalendarModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        padding: 10,
        borderRadius: 10,
        marginHorizontal:10
    },
});
