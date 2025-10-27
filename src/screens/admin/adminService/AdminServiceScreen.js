import { View, Text, FlatList } from 'react-native';
import React from 'react';
import AdminLayout from '../../../components/AdminLayout';
import CustomButton from '../../../components/CustomButton';
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import AdminServiceCard from './AdminServiceComponents/AdminServiceCard';

const AdminServiceScreen = ({ navigation }) => {
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);

  const renderItem = ({ item }) => <AdminServiceCard />;

  return (
    <AdminLayout>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={[styles.header, { fontSize: 22 }]}>All Service</Text>
        <CustomButton
          label={'Add+'}
          style={{ width: 'auto' }}
          onPress={() => navigation.navigate('AdminAddServiceScreen')}
        />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 20, paddingBottom: 200 }}
      />
    </AdminLayout>
  );
};

export default AdminServiceScreen;
