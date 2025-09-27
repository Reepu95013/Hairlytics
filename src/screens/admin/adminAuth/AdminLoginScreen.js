import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';
import SecondLayout from '../../../components/SecondLayout';
import { storage } from '../../../utils/storage';
import { key } from '../../../utils/key';
import { useLogin } from '../../../context/LoginContext';

const AdminLoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useColorTheme();
  const commonStyles = createStyles(themeColor, fontFamily);
  const {signIn } = useLogin();

  const [loginData, setLoginData] = useState({ username: "", password: "" })


  const Header = () => (
    <View style={{ marginTop: 60 }} />
  )

  const onClickLogin = async () => {
    if (loginData.username == "Reepu") {
      if (loginData.password == "12345") {
        signIn('Reepu12345');
      }else{
        console.log('password wrong!');
      }
    }else{
      console.log('username wrong!')
    }

  }





  return (
    <SecondLayout CustomHeader={Header}>
      <View>

        <Image source={require('../../../../assets/images/splashlogo.png')} style={{ width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center' }} />

        <CustomInputText
          label={t('username')}
          placeholder={t('username')}
          value={loginData.username}
          onChangeText={(text) => setLoginData({ ...loginData, username: text })}
          required
        />
        <CustomInputText
          label={t('password')}
          placeholder={t('password')}
          value={loginData.password}
          onChangeText={(text) => setLoginData({ ...loginData, password: text })}
          required
        />
        <Text style={commonStyles.text}>{t('forgot_password')}?</Text>
        <CustomButton
          label={t('login')}
          onPress={onClickLogin}
        />

        <Text style={commonStyles.text}>{t('have_no_account')}?<Text style={{ color: 'green' }} onPress={() => navigation.navigate('AdminRegisterScreen')}> {t('register')}</Text></Text>
      </View>

    </SecondLayout>
  )

}

export default AdminLoginScreen