import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import CustomHeaderLayout from '../../../components/CustomHeaderLayout'


const images = [
  { id: "1", uri: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" },
  { id: "2", uri: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg" },
  { id: "3", uri: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg" },
  { id: "4", uri: "https://images.pexels.com/photos/3183200/pexels-photo-3183200.jpeg" },
  { id: "5", uri: "https://images.pexels.com/photos/3183201/pexels-photo-3183201.jpeg" },
  { id: "6", uri: "https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg" },
  { id: "7", uri: "https://images.pexels.com/photos/3183203/pexels-photo-3183203.jpeg" },
  { id: "8", uri: "https://images.pexels.com/photos/3183204/pexels-photo-3183204.jpeg" },
  { id: "9", uri: "https://images.pexels.com/photos/3183205/pexels-photo-3183205.jpeg" },
  { id: "10", uri: "https://images.pexels.com/photos/3183206/pexels-photo-3183206.jpeg" },
];
const GalleryScreen = () => {

    const renderItem = ({ item }) => {
        return (
            <Image source={{ uri: item?.uri }} style={{ width: '48%', height: 200, marginTop: 10, }} />
        )
    }

    return (
        <CustomHeaderLayout screenName={'Gallery'}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', }}
                contentContainerStyle={{ paddingBottom: 150 }}
                showsVerticalScrollIndicator={false}
            />
        </CustomHeaderLayout>
    )
}

export default GalleryScreen;
