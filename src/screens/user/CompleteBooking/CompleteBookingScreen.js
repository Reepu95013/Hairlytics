import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import CustomHeaderLayout from '../../../components/CustomHeaderLayout'
import LottieView from 'lottie-react-native'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const CompleteBookingScreen = () => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useColorTheme();
  const styles = createStyles(themeColor, fontFamily);
  const navigation = useNavigation();

  useEffect(() => {


    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Drawer',
            state: {
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            },
          },
        ],
      })
    );
    return true; // prevent default back behavior
  };

  return (
    <CustomHeaderLayout screenName={''} customBack={() => backAction()}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={require("../../../../assets/lottieAnimations/success.json")}
          autoPlay
          loop={false}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.largeText}>{t('your_appointment_booked_successfully')}</Text>
        <Text style={styles.largeText}>{t('your_appointment_no')} 1001</Text>

      </View>

    </CustomHeaderLayout>

  )
}

export default CompleteBookingScreen