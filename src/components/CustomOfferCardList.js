import { View, Text, FlatList } from 'react-native'
import React, { memo, useCallback } from 'react'
import CustomOfferCard from './CustomOfferCard';

const CustomOfferCardList = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const renderItem = useCallback(({ item }) => (
        <CustomOfferCard />
    ),[])
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString() }
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
            />
        </View>
    )
}

export default memo(CustomOfferCardList);