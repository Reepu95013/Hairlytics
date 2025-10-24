import { View, Text, Button, Pressable } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import CustomButton from '../../../components/CustomButton';
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import AdminDashboardCard from './AdminDashboardComponents/AdminDashboardCard';
import CustomPieChart from '../../../components/CustomPieChart';
import { barberDashboardData } from '../../../utils/dataStore';

const AdminDashboardScreen = () => {
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);

  return (
    <AdminLayout>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={[styles.header, { fontSize: 22 }]}>Overview</Text>
        <CustomButton label={'Week'} style={{ width: 'auto' }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        {barberDashboardData.map((item, index) => (
          <AdminDashboardCard key={index} data={item}/>
        ))}
      </View>

      <View>
        <CustomPieChart />
      </View>
    </AdminLayout>
  );
};

export default AdminDashboardScreen;
