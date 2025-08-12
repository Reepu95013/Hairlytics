import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustomCategoryCard from './CustomCategoryCard';

const CustomCategoryCardList = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const renderItem = ({ item }) => (
        <CustomCategoryCard />
    )
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item=> {item.toString()}}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap:12}}
            />
        </View>
    )
}

export default CustomCategoryCardList