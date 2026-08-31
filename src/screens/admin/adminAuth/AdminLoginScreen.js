import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import createStyles from '../../../constants/styles';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';
import SecondLayout from '../../../components/SecondLayout';
import { loginUser } from '../../../redux/auth/authThunk';
import AnimatedToast from '../../../animatedComponents/AnimatedToast';

const AdminLoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { loading, error } = useSelector(state => state.auth);
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const commonStyles = createStyles(themeColor, fontFamily);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const Header = () => <View style={{ marginTop: 60 }} />;

  const onClickLogin = async () => {
    try {
      const result = await dispatch(loginUser(loginData)).unwrap();
      console.log('admin Login successful:', result);
    } catch (error) {
      console.log('Login failed:', error.data);
    }
  };

  return (
    <>
      <SecondLayout CustomHeader={Header}>
        <View>
          <Image
            source={require('../../../../assets/images/splashlogo.png')}
            style={{
              width: 200,
              height: 200,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />

          <CustomInputText
            label={t('username')}
            placeholder={t('username')}
            value={loginData.username}
            onChangeText={text =>
              setLoginData({ ...loginData, username: text })
            }
            required
          />
          <CustomInputText
            label={t('password')}
            placeholder={t('password')}
            value={loginData.password}
            onChangeText={text =>
              setLoginData({ ...loginData, password: text })
            }
            required
          />
          <Text style={commonStyles.text}>{t('forgot_password')}?</Text>
          <CustomButton
            label={t('login')}
            onPress={onClickLogin}
            loading={loading}
          />

          <Text style={commonStyles.text}>
            {t('have_no_account')}? 
            <Text
              style={{ color: 'green' }}
              onPress={() => navigation.navigate('AdminRegisterScreen')}
            >
              {' '}
              {t('register')}
            </Text>
          </Text>
        </View>
      </SecondLayout>
      <View style={{marginLeft:12}}>
        <AnimatedToast
          message={typeof error?.data === "string" ? error?.data: error?.data?.title}
          type={'ERROR'}
          visible={error ? true : false}
          duration={3000}
        />
      </View>
    </>
  );
};

export default AdminLoginScreen;
