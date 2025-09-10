import React, { useRef, useState, useEffect, memo } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { useColorTheme } from '../context/ThemeContext';

const { width } = Dimensions.get('window');

const images = [
    { id: '1', uri: require('../../assets/images/haircuting.png'), title: 'Slide 1' },
    { id: '2', uri: require('../../assets/images/haircuting.png'), title: 'Slide 2' },
    { id: '3', uri: require('../../assets/images/haircuting.png'), title: 'Slide 3' },
];

const CustomAutoSlider = () => {
    const flatListRef = useRef(null);
    const { themeColor, fontFamily } = useColorTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }, 3000); // 3 sec

        return () => clearInterval(interval);
    }, [currentIndex]);

    // Handle manual scroll
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.imageWrapper}>
                        <Image source={item.uri} style={styles.image} />
                    </View>
                )}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            />

            {/* Pagination Dots */}
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot, { backgroundColor: themeColor.icon },
                            currentIndex === index ? { backgroundColor: themeColor.primary } : null,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
    },
    caption: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 8,
        alignSelf: 'center',
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 6,
        marginHorizontal: 4,
    },
    imageWrapper: {
        width,
        height: 200,
        overflow: 'hidden', // ✅ Clips the image corners
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default memo(CustomAutoSlider);
