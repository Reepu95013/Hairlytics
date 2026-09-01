import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import createStyles from '../../constants/styles';
import SecondLayout from '../../components/SecondLayout';
import CustomInputText from '../../components/CustomInputText';
import CustomButton from '../../components/CustomButton';
import { forgotPasswordApi } from '../../api/authApi';
import AnimatedToast from '../../animatedComponents/AnimatedToast';

const ForgotPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const commonStyles = createStyles(themeColor, fontFamily);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClickContinue = async () => {
    try {
      setLoading(true);
      const response = await forgotPasswordApi({ username: username });
      navigation.navigate('ResetPasswordScreen', {
        username: username,
        message: response?.message,
      });
    } catch (error) {
      setError(error.data);
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
      <View style={{ marginLeft: 12 }}>
        <AnimatedToast
          message={error}
          type={'ERROR'}
          visible={error ? true : false}
          duration={5000}
        />
      </View>
    </>
  );
};

export default ForgotPasswordScreen;
