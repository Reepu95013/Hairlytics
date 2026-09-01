import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import SecondLayout from '../../components/SecondLayout';
import CustomInputText from '../../components/CustomInputText';
import CustomButton from '../../components/CustomButton';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AnimatedToast from '../../animatedComponents/AnimatedToast';
import { resetPasswordApi } from '../../api/authApi';
import { setLoading, showToast } from '../../redux/app/appSlice';
import { loginUser } from '../../redux/auth/authThunk';

const ResetPasswordScreen = ({ route }) => {
  const { username, message } = route.params || {};
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [otp, setOtp] = useState(null);
  const [password, setPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);
  const { toast, loading } = useSelector(state => state.app);

  useEffect(() => {
    if (message) {
      dispatch(
        showToast({
          message: message,
          type: 'SUCCESS',
        }),
      );
    }
  }, [message]);

  const onClickResetPassword = async () => {
    try {
      dispatch(setLoading(true));
      const data = {
        email: email,
        otp: otp,
        password: password,
        confirmPassword: cPassword,
      };
      await resetPasswordApi(data);
      await onClickLogin();
    } catch (error) {
      const message =
        typeof error?.data === 'string' ? error?.data : error?.data?.title;

      dispatch(
        showToast({
          message: message,
          type: 'ERROR',
        }),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onClickLogin = async () => {
    try {
      const loginData = {
        username: username,
        password: password,
      };
      await dispatch(loginUser(loginData)).unwrap();
    } catch (error) {
      console.log('Login failed:', error.data);
    }
  };

  return (
    <>
      <SecondLayout screenName={t('reset_password')}>
        <CustomInputText
          label={t('email')}
          placeholder={t('email')}
          value={email}
          onChangeText={text => setEmail(text)}
          required
        />

        <CustomInputText
          label={t('otp')}
          placeholder={t('otp')}
          required
          keyboardType="number"
          maxLength={6}
          onChangeText={text => setOtp(text)}
        />

        <CustomInputText
          label={t('password')}
          placeholder={t('password')}
          value={password}
          onChangeText={text => setPassword(text)}
          required
          secureTextEntry
        />
        <CustomInputText
          label={t('confirm_password')}
          placeholder={t('confirm_password')}
          value={cPassword}
          onChangeText={text => setCPassword(text)}
          required
        />

        <CustomButton
          label={t('reset_password')}
          onPress={onClickResetPassword}
          loading={loading}
        />
      </SecondLayout>

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

export default ResetPasswordScreen;
