import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import React, { memo } from 'react';
import CustomBottomTabs from './CustomBottomTabs';

import CustomHeader from './CustomHeader';
import { slides } from '../utils/dataStore';
import { key } from '../utils/key';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { themeColor, themeType } = useSelector(state => state.theme);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeColor.background }]}
    >
      <CustomHeader />
      <FlatList
        data={[1]}
        renderItem={() => <View style={styles.content}>{children}</View>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />

      <CustomBottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    marginHorizontal: 12,
  },
});

export default memo(Layout);
