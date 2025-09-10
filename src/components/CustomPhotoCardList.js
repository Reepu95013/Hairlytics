import { View, Text, FlatList } from 'react-native'
import React, { memo } from 'react'
import CustomPhotoCard from './CustomPhotoCard';

const CustomPhotoCardList = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const renderItem = ({ item }) => (
        <CustomPhotoCard />
    )
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => { item.toString() }}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
            />
        </View>
    )
}

export default memo(CustomPhotoCardList);