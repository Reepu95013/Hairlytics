import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';
import SecondLayout from '../../../components/SecondLayout';

const AdminLoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useColorTheme();
  const commonStyles = createStyles(themeColor, fontFamily);

  const Header = () => (
    <View style={{ marginTop: 60 }} />
  )



  return (
    <SecondLayout CustomHeader={Header}>
      <View>

        <Image source={require('../../../../assets/images/splashlogo.png')} style={{ width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center' }} />

        <CustomInputText
          label={t('username')}
          placeholder={t('username')}
          required
        />
        <CustomInputText
          label={t('password')}
          placeholder={t('password')}
          required
        />
        <Text style={commonStyles.text}>{t('forgot_password')}?</Text>
        <CustomButton
          label={t('login')}
        />

        <Text style={commonStyles.text}>{t('have_no_account')}?<Text style={{ color: 'green' }} onPress={() => navigation.navigate('SignupScreen')}> {t('register')}</Text></Text>
      </View>

    </SecondLayout>
  )

}

export default AdminLoginScreen