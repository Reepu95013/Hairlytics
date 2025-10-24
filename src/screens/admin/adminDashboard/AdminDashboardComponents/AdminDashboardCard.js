import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';


const AdminDashboardCard = ({data}) => {
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);

  return (
    <View
      style={{
        width: '48%',
        height: 120,
        borderWidth: 1,
        borderColor: data?.color,
        borderRadius: 10,
        backgroundColor:data?.color
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 10 }}>
          <Text style={[styles.header, {fontSize:24}]}>{data?.value}</Text>
          <Text style={styles.largeText}>{data?.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default AdminDashboardCard;
