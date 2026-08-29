import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import SecondLayout from '../../../components/SecondLayout';
import createStyles from '../../../constants/styles';
import CustomCard from '../../../components/CustomCard';
import { useSelector } from 'react-redux';

const AdminAppointmentViewScreen = () => {
     const { themeColor, fontFamily } = useSelector(state => state.theme);
        const styles = createStyles(themeColor, fontFamily);
        const [paymethodMethod, setPaymentMethod] = useState('cash');
  return (
    <SecondLayout screenName={'Appointment Details'}>
      <View style={{ gap: 10 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: themeColor.border,
            padding: 10,
            borderRadius: 10,
            backgroundColor: themeColor.secondaryBackground,
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.largeText}>Appointment Date:</Text>
            <Text style={styles.largeText}>15 AUg 2025</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.largeText}>Customer Name:</Text>
            <Text style={styles.largeText}>Ganesh</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.largeText}>Customer phone no.:</Text>
            <Text style={styles.largeText}>+91 89687141019</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.largeText}>Appointment Status:</Text>
            <Text onPress={()=>Alert.alert("", "chnage state modal")} style={[styles.largeText, {textDecorationLine:'underline', color:'green'}]}>Upcomming</Text>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: themeColor.border,
            padding: 10,
            borderRadius: 10,
            backgroundColor: themeColor.secondaryBackground,
            gap: 10,
          }}
        >
          <Text style={styles.header}>Summary</Text>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: themeColor.border,
            padding: 10,
            borderRadius: 10,
            backgroundColor: themeColor.secondaryBackground,
            gap: 10,
          }}
        >
          <Text style={styles.header}>Payment Summary</Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.largeText}>Sub Total:</Text>
              <Text style={styles.largeText}>$40</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.largeText}>Tex:</Text>
              <Text style={styles.largeText}>$40</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.largeText}>Discount %:</Text>
              <Text style={styles.largeText}>$2</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.largeText}>Total:</Text>
              <Text style={styles.largeText}>$84</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: themeColor.border,
            padding: 10,
            borderRadius: 10,
            backgroundColor: themeColor.secondaryBackground,
            gap: 10,
          }}
        >
          <Text style={styles.header}>Payment Method</Text>
          <Text style={styles.largeText}>Cash</Text>
        </View>
      </View>
    </SecondLayout>
  );
};

export default AdminAppointmentViewScreen;
