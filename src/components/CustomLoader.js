// components/Loader.js
import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';

const CustomLoader = ({ visible }) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.container}>
                <View style={styles.loaderBox}>
                    <LottieView
                        source={require('../../assets/lottieAnimations/loader.json')}
                        autoPlay
                        loop
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default CustomLoader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderBox: {
        padding: 10,
        backgroundColor: '#00000070',
        borderRadius: 10,
    },
});
