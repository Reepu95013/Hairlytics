import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import { useColorTheme } from '../../../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import createStyles from '../../../constants/styles';
import { useNavigation } from '@react-navigation/native';

const SearchResultScreen = ({ route }) => {
    const { themeColor, fontFamily } = useColorTheme();
    const styles = createStyles(themeColor, fontFamily);
    const { query } = route.params;
    const navigation = useNavigation();




    const CustomHeader = () => (
        <View style={{ marginTop: 60, marginBottom: 12, marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' size={32} color={themeColor.iconSecondary} />
                </TouchableOpacity>
                <Text style={styles.header}>{query || ''}</Text>
            </View>
            <Pressable onPress={() => navigation.replace('SearchScreen')}>
                <Icon name="search" size={28} color={themeColor.iconSecondary} />
            </Pressable>
        </View>
    )

    return (
        <SecondLayout CustomHeader={CustomHeader}>
            <Text>SearchResultScreen</Text>
        </SecondLayout>
    )
}

export default SearchResultScreen