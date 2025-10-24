import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import AdminLayout from '../../../components/AdminLayout';
import AdminAppointmentCards from './AdminAppointmentComponents/AdminAppointmentCards';

const tabs = ['Completed', 'In Progress', 'UpComming'];

const AdminAppointmentScreen = () => {
  const TabComponent = ({ label }) => (
    <Pressable
      style={{ backgroundColor: 'white', padding: 10, borderRadius: 16 }}
    >
      <Text>{label}</Text>
    </Pressable>
  );

  const renderItem = ({ item }) => <AdminAppointmentCards />;

  return (
    <AdminLayout>
      <View
        style={{
          width: '100%',
          padding: 10,
          marginTop: 10,
          borderColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom:20
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
        contentContainerStyle={{gap:12, paddingBottom:200,}}
      />

    </AdminLayout>
  );
};

export default AdminAppointmentScreen;
