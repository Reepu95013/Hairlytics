import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { memo } from 'react';
import { useColorTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import createStyles from '../constants/styles';

const SecondLayout = ({ children, screenName, CustomHeader, CustomBottom }) => {
  const { themeColor, fontFamily } = useColorTheme();
  const navigation = useNavigation();
  const styles = createStyles(themeColor, fontFamily);

  return (
    <SafeAreaView
      style={[
        customstyles.container,
        { backgroundColor: themeColor.background },
      ]}
    >
      <>
        {!CustomHeader && (
          <View
            style={{
              marginTop: 60,
              marginBottom: 12,
              marginHorizontal: 16,
              flexDirection: 'row',
              gap: 16,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={32}
                color={themeColor.iconSecondary}
              />
            </TouchableOpacity>
            <Text style={styles.header}>{screenName || ''}</Text>
          </View>
        )}
      </>
      <FlatList
        data={[1]}
        renderItem={() => <View style={customstyles.content}>{children}</View>}
        ListHeaderComponent={CustomHeader && <CustomHeader />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
        nestedScrollEnabled={true} 
      />

      {CustomBottom && <CustomBottom />}
    </SafeAreaView>
  );
};

const customstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    marginHorizontal: 12,
  },
});

export default memo(SecondLayout);
