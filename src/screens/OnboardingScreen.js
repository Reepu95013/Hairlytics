import React, { useRef, useState } from 'react';
import {
    View, Text, FlatList, Image, Dimensions, TouchableOpacity, StyleSheet,
    SafeAreaView
} from 'react-native';
import { slides } from '../utils/dataStore';
import { useColorTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const { themeColor } = useColorTheme();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View style={styles.footer}>
                {/* Indicator Dots */}
                <View style={styles.indicatorContainer}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex === index && { backgroundColor: themeColor.primary, width: 50 }
                            ]}
                        />
                    ))}
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    {currentSlideIndex === slides.length - 1 ? (
                        <TouchableOpacity
                            style={[styles.btn, { backgroundColor: themeColor.primary }]}
                            onPress={() => navigation.replace('ChooseAccount')}
                        >
                            <Text style={[styles.btnText, { color: themeColor.textPrimary }]}>{t('get_started')}</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                style={[styles.btn, { backgroundColor: '#ddd', marginRight: 10 }]}
                                onPress={skip}
                            >
                                <Text style={[styles.btnText, { color: '#000' }]}>{t('skip')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, { backgroundColor: themeColor.primary }]} onPress={goToNextSlide}>
                                <Text style={[styles.btnText, { color: themeColor.textPrimary }]}>{t('next')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    const Slide = ({ item }) => (
        <View style={{ alignItems: 'center', width, paddingHorizontal: 12 }}>
            <View style={{ width: width, height: 400, marginTop: 150 }}>
                <Image source={item.image} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: themeColor.secondary }}>
            <FlatList
                ref={ref}
                data={slides}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd={updateCurrentSlideIndex}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </View>

    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    footer: {
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    indicator: {
        height: 8,
        width: 20,
        backgroundColor: '#888',
        marginHorizontal: 4,
        borderRadius: 4,
    },
    buttonContainer: {
        marginBottom: 100,
    },
    btn: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    btnText: {
        fontWeight: '600',
        fontSize: 16,
    },
});

export default OnboardingScreen;
