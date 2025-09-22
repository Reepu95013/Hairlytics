import { View, Text, FlatList } from 'react-native'
import React, { memo, useCallback } from 'react'
import CustomItemCard from './CustomItemCard';

const CustomItemCardList = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const renderItem = useCallback(({ item }) => (
        <CustomItemCard />
    ), [])
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
            />
        </View>
    )
}

export default memo(CustomItemCardList);