import { View, Text, Pressable } from 'react-native';
import React, { memo } from 'react';
import { useColorTheme } from '../../../../context/ThemeContext';
import createStyles from '../../../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AdminServiceCard = () => {
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: themeColor.border,
        padding: 12,
        height: 'auto',
        borderRadius: 10,
        backgroundColor: themeColor.secondaryBackground,
      }}
    >
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end', gap: 10 }}>
        <Pressable
          style={{
            padding: 5,
            borderWidth: 1,
            borderColor: themeColor.icon,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('AdminEditServiceScreen')}
        >
          <Icon name="edit" size={22} color={themeColor.icon} />
        </Pressable>
        <Pressable
          style={{
            padding: 5,
            borderWidth: 1,
            borderColor: themeColor.error,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="delete" size={22} color={themeColor.error} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <View
          style={{
            borderWidth: 1,
            width: 80,
            height: 80,
            borderRadius: 10,
            borderColor: themeColor.border,
          }}
        ></View>
        <View>
          <Text style={styles.largeText}>Searvice Name</Text>
          <Text style={styles.largeText}>Price : 80$</Text>
          <Text style={styles.largeText}>Discount : 40%</Text>
          <Text style={styles.largeText}>Coupon : ASBD20 (10%)</Text>
          <Text style={styles.largeText}>
            Status :{' '}
            <Text style={[styles.largeText, { color: themeColor.success }]}>
              Active
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(AdminServiceCard);
