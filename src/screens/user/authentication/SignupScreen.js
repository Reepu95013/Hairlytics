import { View, Text, Image } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';

const SignupScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useColorTheme();
  const commonStyles = createStyles(themeColor, fontFamily);
  return (
    <SecondLayout screenName={t('register')}>
      <View>

        <Image source={require('../../../../assets/images/splashlogo.png')} style={{ width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center' }} />

        <CustomInputText
          label={t('username')}
          placeholder={t('username')}
          required
        />
        <CustomInputText
          label={t('full_name')}
          placeholder={t('full_name')}
          required
        />
        <CustomInputText
          label={t('birth')}
          placeholder={t('birth')}
          required
        />
        <CustomInputText
          label={t('email')}
          placeholder={t('email')}
          required
        />
        <CustomInputText
          label={t('phone')}
          placeholder={t('phone')}
          required
          keyboardType='number'
          maxLength={10}
          onChangeText={(text) => console.log(text)}

        />
        <Text style={[commonStyles.text, { textAlign: 'right' }]}>{t('get_otp')}?</Text>
        <CustomInputText
          label={t('otp')}
          placeholder={t('otp')}
          required
          keyboardType='number'
          maxLength={4}
          onChangeText={(text) => console.log(text)}

        />
        <CustomInputText
          label={t('password')}
          placeholder={t('password')}
          required
          secureTextEntry
        />
        <CustomInputText
          label={t('confirm_password')}
          placeholder={t('confirm_password')}
          required
        />

        <CustomButton
          label={t('register')}
        />

        <Text style={commonStyles.text}>{t('do_have_account')}?<Text style={{ color: 'green' }} onPress={() => navigation.navigate('LoginScreen')}> {t('login')}</Text></Text>
      </View>

    </SecondLayout>
  )
}

export default SignupScreen