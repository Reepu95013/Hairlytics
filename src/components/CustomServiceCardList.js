import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustomServiceCard from './CustomServiceCard'

const CustomServiceCardList = () => {
    const data = [
        { id: "1", image: require('../../assets/images/facial.png') },
        { id: "2", image: require('../../assets/images/masaj.png') },
        { id: "3", image: require('../../assets/images/hairdry.png') },
        { id: "4", image: require('../../assets/images/razor.png') },
        { id: "5", image: require('../../assets/images/nailpolish.png') },
        { id: "6", image: require('../../assets/images/nailpolish.png') },
    ]

    const renderItem = ({ item }) => (
        <CustomServiceCard item={item} />
    )
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
        />
    )
}

export default CustomServiceCardList