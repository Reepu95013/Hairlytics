import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { memo } from 'react'
import CustomBottomTabs from './CustomBottomTabs'
import { useColorTheme } from '../context/ThemeContext'
import CustomHeader from './CustomHeader'

const Layout = ({ children }) => {
  const { themeColor } = useColorTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColor.background }]}>
      <CustomHeader />
      <FlatList
        data={[1]}
        renderItem={() => (
          <View style={styles.content}>
            {children}
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />

      <CustomBottomTabs />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    marginHorizontal: 12
  },
});

export default memo(Layout)