import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout'
import CustomItemCard from '../../../components/CustomItemCard'

const WishlistScreen = () => {

    const renderItem = ({ item }) => (
        <CustomItemCard width={'100%'} height={200} />
    )
    return (
        <Layout>
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={<View style={{height:12}}/>}

                />

            </View>

        </Layout>
    )
}

export default WishlistScreen