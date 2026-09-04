import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, { memo } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import createStyles from '../constants/styles';
import { useSelector } from 'react-redux';
import AnimatedToast from '../animatedComponents/AnimatedToast';

const SecondLayout = ({ children, screenName, CustomHeader, CustomBottom }) => {
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const navigation = useNavigation();
  const styles = createStyles(themeColor, fontFamily);
  const { toast } = useSelector(state => state.app);

  return (
    <>
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
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FlatList
              data={[1]}
              renderItem={() => (
                <View style={customstyles.content}>{children}</View>
              )}
              ListHeaderComponent={CustomHeader && <CustomHeader />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 150 }}
              nestedScrollEnabled={true}
            />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        {CustomBottom && <CustomBottom />}
      </SafeAreaView>
      <View style={{ marginLeft: 12 }}>
        <AnimatedToast
          message={toast.message}
          type={toast.type}
          visible={toast.visible}
          duration={3000}
        />
      </View>
    </>
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
