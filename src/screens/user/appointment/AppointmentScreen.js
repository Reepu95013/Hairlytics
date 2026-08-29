import { View, Text, Pressable, FlatList } from 'react-native'
import React from 'react'
import Layout from '../../../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import createStyles from '../../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppointmentOrderCard from './AppointmentComponents/AppointmentOrderCard';

const AppointmentScreen = () => {
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const styles = createStyles(themeColor, fontFamily);

  const renderItem = ({ item }) => (
    <AppointmentOrderCard />
  );

  return (
    <Layout>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ gap:10 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </View>

    </Layout>
  )
}

export default AppointmentScreen