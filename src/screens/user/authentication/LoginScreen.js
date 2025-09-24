import { View, Text, Image } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import CustomInputText from '../../../components/CustomInputText'
import CustomButton from '../../../components/CustomButton'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import { useTranslation } from 'react-i18next'

const LoginScreen = ({navigation}) => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useColorTheme();
  const commonStyles = createStyles(themeColor, fontFamily);
  return (
    <SecondLayout screenName={t('login')}>
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

        <Text style={commonStyles.text}>{t('have_no_account')}?<Text style={{ color: 'green' }} onPress={()=>navigation.navigate('SignupScreen')}> {t('register')}</Text></Text>
      </View>

    </SecondLayout>
  )
}

export default LoginScreen