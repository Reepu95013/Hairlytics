import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import SecondLayout from '../../../components/SecondLayout'
import SearchInput from './SearchComponents/SearchInput'
import { DATA } from '../../../utils/dataStore'
import { useTranslation } from 'react-i18next'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import { useSelector } from 'react-redux'

const SearchScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const { themeColor, fontFamily } = useSelector(state => state.theme);
    const styles = createStyles(themeColor, fontFamily);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(DATA);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.trim() === "") {
                setFilteredData(DATA);
            } else {
                setFilteredData(
                    DATA.filter((item) =>
                        item.toLowerCase().includes(search.toLowerCase())
                    )
                );
            }
        }, 400);

        return () => clearTimeout(delayDebounce);
    }, [search]);





    return (
        <SecondLayout screenName={'Search'}>
            <View style={{ gap: 20 }}>
                <SearchInput onChangeText={(text) => setSearch(text)} value={search} onSubmitEditing={() => navigation.replace('SearchResultScreen', { query: search })} />
                {search.length > 0 && (
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => navigation.replace('SearchResultScreen', { query: item })}>
                                <Text style={[styles.largeText, { borderBottomWidth: 1, borderColor: themeColor.primaryText, paddingBottom: 6 }]}>{item}</Text>
                            </Pressable>
                        )}
                        ItemSeparatorComponent={<View style={{ height: 10 }} />}

                    />)}

            </View>

        </SecondLayout>
    )
}

export default SearchScreen