import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import SecondLayout from '../../components/SecondLayout';
import CustomInputText from '../../components/CustomInputText';
import CustomButton from '../../components/CustomButton';
import { forgotPasswordApi } from '../../api/authApi';
import { setLoading, showToast } from '../../redux/app/appSlice';

const ForgotPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState(null);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.app);

  const onClickContinue = async () => {
    try {
      dispatch(setLoading(true));
      const response = await forgotPasswordApi({ username: username });
      navigation.navigate('ResetPasswordScreen', {
        username: username,
        message: response?.message,
      });
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

  return (
    <SecondLayout screenName={t('forgot_password')}>
      <CustomInputText
        label={t('username')}
        placeholder={t('username')}
        value={username}
        onChangeText={text => setUsername(text)}
        required
      />

      <CustomButton
        label={t('continue')}
        onPress={onClickContinue}
        loading={loading}
        disabled={!username}
      />
    </SecondLayout>
  );
};

export default ForgotPasswordScreen;
