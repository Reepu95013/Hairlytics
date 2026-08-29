import { View, Text, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import AdminAppointmentCards from './AdminAppointmentComponents/AdminAppointmentCards';
import createStyles from '../../../constants/styles';
import { useSelector } from 'react-redux';

const tabs = ['Completed', 'In Progress', 'UpComming'];

const AdminAppointmentScreen = () => {
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const styles = createStyles(themeColor, fontFamily);
  const [selectTab, setSelectTab] = useState('Completed');

  const TabComponent = ({ label }) => (
    <Pressable
      onPress={() => setSelectTab(label)}
      style={{
        backgroundColor: selectTab == label && themeColor?.primary,
        padding: 10,
        borderRadius: 16,
      }}
    >
      <Text style={[styles.largeText, {color:selectTab===label && themeColor.primaryText}]}>{label}</Text>
    </Pressable>
  );

  const renderItem = ({ item }) => <AdminAppointmentCards />;

  return (
    <AdminLayout>
      <View
        style={{
          width: '100%',
          padding: 12,
          marginTop: 10,
          borderColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          backgroundColor: themeColor?.secondaryBackground,
          borderRadius: 16,
        }}
      >
        {tabs.map((item, index) => (
          <TabComponent label={item} key={index} />
        ))}
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ gap: 12, paddingBottom: 200 }}
      />
    </AdminLayout>
  );
};

export default AdminAppointmentScreen;
