import { View, Text } from 'react-native'
import React from 'react'
import SecondLayout from '../../../components/SecondLayout'
import CustomInputText from '../../../components/CustomInputText'
import CustomButton from '../../../components/CustomButton'

const LoginScreen = () => {
  return (
    <SecondLayout screenName={'Login'}>
      <View>

        <CustomInputText
          label={'Email'}
          placeholder={'Email'}
          required
        />
        <CustomInputText
          label={'Password'}
          placeholder={'Password'}
          required
        />
        <Text style={{ color: 'white' }}>Forgot Password?</Text>
        <CustomButton
          label={'Login'}
        />

        <Text style={{ color: 'white' }}>Do you have no Account? <Text style={{ color: 'green' }}> SignUp</Text></Text>
      </View>

    </SecondLayout>
  )
}

export default LoginScreen