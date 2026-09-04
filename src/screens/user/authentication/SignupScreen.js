import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SecondLayout from '../../../components/SecondLayout';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import createStyles from '../../../constants/styles';
import CustomInputText from '../../../components/CustomInputText';
import CustomButton from '../../../components/CustomButton';
import {
  customerRegisterApi,
  getEmailVerifyOTP,
  verifyEmailOTP,
} from '../../../api/authApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { setLoading, showToast } from '../../../redux/app/appSlice';
import { useLoader } from '../../../context/LoaderContext';
import { createAccount, loginUser } from '../../../redux/auth/authThunk';

const SignupScreen = ({ navigation }) => {
  const { setLoaderVisible } = useLoader();
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useSelector(state => state.theme);
  const commonStyles = createStyles(themeColor, fontFamily);
  const [otp, setOtp] = useState(null);
  const [sendOtp, setsendOtp] = useState(false);
  const [cPassword, setCPassword] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.app);

  const [customerData, setCustomerData] = useState({
    name: '',
    lastName: '',
    birth: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    role: 1,
    isActive: true,
  });

  const handleInputChange = (field, value) => {
    setCustomerData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const getEmailOTP = async () => {
    try {
      setLoaderVisible(true);
      const response = await getEmailVerifyOTP(customerData.email);
      setsendOtp(true);
      console.log(response);
      dispatch(
        showToast({
          message: response.message,
          type: 'SUCCESS',
        }),
      );
    } catch (error) {
      console.log('errr', error);
      const message =
        typeof error?.data === 'string' ? error?.data : error?.data?.title;

      dispatch(
        showToast({
          message: message,
          type: 'ERROR',
        }),
      );
    } finally {
      setLoaderVisible(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoaderVisible(true);

      const data = {
        email: customerData.email,
        otp: otp,
      };

      const response = await verifyEmailOTP(data);
      setsendOtp(false);
      setEmailVerify(true);
      console.log(response);
      dispatch(
        showToast({
          message: response.message,
          type: 'SUCCESS',
        }),
      );
    } catch (error) {
      console.log('errr', error);
      const message =
        typeof error?.data === 'string' ? error?.data : error?.data?.title;

      dispatch(
        showToast({
          message: message,
          type: 'ERROR',
        }),
      );
    } finally {
      setLoaderVisible(false);
    }
  };

  const onCreateCustomer = async () => {
    try {
      dispatch(setLoading(true));
      if (customerData.password == '' || cPassword == '') {
        dispatch(
          showToast({
            message: 'Password and confirm password are required!',
            type: 'ERROR',
          }),
        );
        return;
      }

      if (customerData.password != cPassword) {
        dispatch(
          showToast({
            message: 'Password and confirm password do not match.',
            type: 'ERROR',
          }),
        );
        return;
      }

      console.log('customerData', customerData);
      await dispatch(createAccount(customerData)).unwrap();
      setOtp(null);
      setsendOtp(false);
      setEmailVerify(false);
      
    } catch (error) {
      console.log('errr', error);
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const formattedDate = date.toISOString().split('T')[0];
    console.warn('A date has been picked: ', formattedDate);
    handleInputChange('birth', formattedDate);
    hideDatePicker();
  };

  return (
    <SecondLayout screenName={t('register')}>
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
          value={customerData.username}
          onChangeText={text => handleInputChange('username', text)}
          required
        />
        <CustomInputText
          label={t('first_name')}
          placeholder={t('first_name')}
          value={customerData.name}
          onChangeText={text => handleInputChange('name', text)}
          required
        />
        <CustomInputText
          label={t('last_name')}
          value={customerData.lastName}
          onChangeText={text => handleInputChange('lastName', text)}
          placeholder={t('last_name')}
          required
        />
        <View>
          <Text style={commonStyles.largeText}>
            {t('birth')}
            <Text style={{ color: themeColor.error }}>*</Text>
          </Text>

          <TouchableOpacity
            onPress={() => showDatePicker()}
            style={{
              height: 46,
              width: '100%',
              borderWidth: 1,
              borderColor: themeColor.border,
              backgroundColor: themeColor.secondaryBackground,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              flexDirection: 'row',
              marginTop: 6,
            }}
          >
            <Text style={[commonStyles.largeText, themeColor.secondaryText]}>
              {customerData.birth || 'D.O.B'}
            </Text>
            <Icon name="calendar-month" size={24} color={themeColor.text} />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date" // 👈 date only
            maximumDate={new Date()}
            onConfirm={handleConfirm}
            onDismiss={hideDatePicker}
            themeVariant="light"
          />
        </View>

        <CustomInputText
          label={t('email')}
          placeholder={t('email')}
          onChangeText={text => handleInputChange('email', text)}
          required
          value={customerData.email}
        />

        {customerData.email && !emailVerify && (
          <Text
            onPress={getEmailOTP}
            style={[
              commonStyles.text,
              { textAlign: 'right', textDecorationLine: 'underline' },
            ]}
          >
            {t('get_otp')}?
          </Text>
        )}
        {emailVerify && (
          <Text style={[[commonStyles.text, { color: themeColor.success }]]}>
            {t('verify_otp')}
          </Text>
        )}
        {sendOtp && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ width: '70%' }}>
              <CustomInputText
                // label={t('otp')}
                placeholder={t('otp')}
                required
                keyboardType="number"
                maxLength={6}
                value={otp}
                onChangeText={text => setOtp(text)}
              />
            </View>
            <CustomButton onPress={verifyOTP} label={t('verify')} />
          </View>
        )}
        <CustomInputText
          label={t('phone')}
          placeholder={t('phone')}
          required
          keyboardType="number"
          maxLength={10}
          value={customerData.phone}
          onChangeText={text => handleInputChange('phone', text)}
        />

        <CustomInputText
          label={t('password')}
          placeholder={t('password')}
          required
          value={customerData.password}
          onChangeText={text => handleInputChange('password', text)}
          secureTextEntry={true}
        />
        <CustomInputText
          label={t('confirm_password')}
          placeholder={t('confirm_password')}
          value={cPassword}
          onChangeText={text => setCPassword(text)}
          secureTextEntry={true}
          required
        />

        <CustomButton
          label={t('register')}
          disabled={!emailVerify}
          onPress={onCreateCustomer}
          loading={loading}
        />

        <Text style={commonStyles.text}>
          {t('do_have_account')}?
          <Text
            style={{ color: 'green' }}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            {' '}
            {t('login')}
          </Text>
        </Text>
      </View>
    </SecondLayout>
  );
};

export default SignupScreen;
