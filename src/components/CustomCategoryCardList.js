import { View, Text, FlatList } from 'react-native'
import React, { memo, useCallback } from 'react'
import CustomCategoryCard from './CustomCategoryCard';

const CustomCategoryCardList = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const renderItem = useCallback(({ item }) => (
        <CustomCategoryCard />
    ), []);

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12 }}
            />
        </View>
    )
}

export default memo(CustomCategoryCardList);