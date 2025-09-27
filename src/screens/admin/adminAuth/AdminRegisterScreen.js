import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorTheme } from "../../../context/ThemeContext";
import createStyles from "../../../constants/styles";
import CustomInputText from "../../../components/CustomInputText";
import { timing } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
import CustomButton from "../../../components/CustomButton";
import Icon from 'react-native-vector-icons/AntDesign';
import SecondLayout from "../../../components/SecondLayout";

const AdminRegisterScreen = () => {
  const { t } = useTranslation();
  const { themeColor, fontFamily } = useColorTheme();
  const commonStyles = createStyles(themeColor, fontFamily);
  const [step, setStep] = useState(1);

  // States for forms
  const [accountInfo, setAccountInfo] = useState({ name: "", email: "", username: "", mobile: "", opt: "", password: "" });
  const [salonDetails, setSalonDetails] = useState({ salonName: "", category: "", WorkingTime: "", address: "", city: "", pinCode: "", salonContact: "", texID: "" });
  const [verification, setVerification] = useState({ idProof: "", licence: "" });
  const [bankDetails, setBankDetails] = useState({ accountNo: "", ifsc: "" });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleSubmit = () => {
    console.log({ accountInfo, salonDetails, verification, bankDetails });
    alert("Registration Completed!");
  };

  // Render step content
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>

            <CustomInputText
              label={t('full_name')}
              placeholder={t('full_name')}
              required
              value={accountInfo.name}
              onChangeText={(text) => setAccountInfo({ ...accountInfo, name: text })}
            />

            <CustomInputText
              label={t('email')}
              placeholder={t('email')}
              required
              value={accountInfo.email}
              onChangeText={(text) => setAccountInfo({ ...accountInfo, email: text })}
              keyboardType="email-address"
            />

            <CustomInputText
              label={t('username')}
              placeholder={t('username')}
              required
              value={accountInfo.username}
              onChangeText={(text) => setAccountInfo({ ...accountInfo, username: text })}
              maxLength={10}
            />

            <CustomInputText
              label={t('mobile')}
              placeholder={t('mobile')}
              required
              value={accountInfo.mobile}
              onChangeText={(text) => setAccountInfo({ ...accountInfo, mobile: text })}
              maxLength={10}
              keyboardType="phone-pad"
            />

            <Text style={[commonStyles.largeText, { textAlign: 'right', textDecorationLine: 'underline' }]}>{t('get_otp')}</Text>

            <CustomInputText
              label={t('otp')}
              placeholder={t('otp')}
              required
              value={accountInfo.opt}
              onChangeText={(text) => setAccountInfo({ ...accountInfo, opt: text })}
              maxLength={6}
              keyboardType="phone-pad"
            />

            <CustomInputText
              label={t('password')}
              placeholder={t('password')}
              required
              value={accountInfo.password}
              onChangeText={(text) => setAccountInfo({ ...accountInfo, password: text })}
              secureTextEntry
            />
          </>
        );
      case 2:
        return (
          <>

            <CustomInputText
              label={t('salon_name')}
              placeholder={t('salon_name')}
              required
              value={salonDetails.salonName}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, salonName: text })}
            />
            <CustomInputText
              label={t('phone')}
              placeholder={t('phone')}
              required
              value={salonDetails.salonContact}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, salonContact: text })}
              keyboardType="phone-pad"
              maxLength={6}
            />

            <CustomInputText
              label={t('category')}
              placeholder={t('category')}
              required
              value={salonDetails.category}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, category: text })}
            />

            <CustomInputText
              label={t('working_time')}
              placeholder={t('working_time')}
              required
              value={salonDetails.WorkingTime}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, WorkingTime: text })}
            />

            <CustomInputText
              label={t('address')}
              placeholder={t('address')}
              required
              value={salonDetails.address}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, address: text })}
              numberOfLines={4}
              multiline={true}
              textAlignVertical={'top'}
              style={{ minHeight: 100 }}

            />

            <CustomInputText
              label={t('city')}
              placeholder={t('city')}
              required
              value={salonDetails.city}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, city: text })}
            />

            <CustomInputText
              label={t('pin_code')}
              placeholder={t('pin_code')}
              required
              value={salonDetails.pinCode}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, pinCode: text })}
              keyboardType="phone-pad"
              maxLength={6}
            />

            <CustomInputText
              label={t('tex_number')}
              placeholder={t('tex_number')}
              required
              value={salonDetails.texID}
              onChangeText={(text) => setSalonDetails({ ...salonDetails, texID: text })}
              maxLength={20}
            />

          </>
        );
      case 3:
        return (
          <>
            <View style={{ gap: 40 }}>
              <View style={{ gap: 12 }}>
                <Text style={commonStyles.header}>Upload Adhaar Card</Text>
                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white', height: 150, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name={'upload'} size={40} color={themeColor.primary} />
                  <CustomButton
                    label={t('upload')}
                    style={{ width: '80%' }}
                  />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={commonStyles.largeText}>adhharcar.png</Text>
                  <Text style={[commonStyles.largeText, [{ textDecorationLine: 'underline' }]]}>{t('view')}</Text>

                </View>

              </View>
              <View style={{ gap: 12 }}>
                <Text style={commonStyles.header}>Upload Shop License</Text>
                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white', height: 150, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name={'upload'} size={40} color={themeColor.primary} />
                  <CustomButton
                    label={t('upload')}
                    style={{ width: '80%' }}
                  />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={commonStyles.largeText}>License.png</Text>
                  <Text style={[commonStyles.largeText, [{ textDecorationLine: 'underline' }]]}>{t('view')}</Text>

                </View>

              </View>
            </View>
          </>
        );
      case 4:
        return (
          <>

            <CustomInputText
              label={t('account_number')}
              placeholder={t('account_number')}
              required
              value={bankDetails.accountNo}
              onChangeText={(text) => setBankDetails({ ...bankDetails, accountNo: text })}
            />

            <CustomInputText
              label={t('ifsc_code')}
              placeholder={t('ifsc_code')}
              required
              value={bankDetails.ifsc}
              onChangeText={(text) => setBankDetails({ ...bankDetails, ifsc: text })}
            />
          </>
        );
      default:
        return null;
    }
  };

  // Horizontal progress bar
  const StepIndicator = () => {
    const progress = (step / 4) * 100; // percentage
    return (
      <View style={[styles.progressContainer, { backgroundColor: themeColor.secondaryBackground }]}>
        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: themeColor.primary }]} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColor.background }} edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <View style={{ height: '100%' }}> */}
          <SecondLayout screenName={'regi'} />
          {/* Progress Bar */}
          <StepIndicator />
          <Text style={[commonStyles.largeText, { textAlign: 'center' }]}>{t('step')} {step} / 4</Text>

          {/* Centered Content */}
          <View style={styles.contentWrapper}>
            <Text style={[commonStyles.header, { marginBottom: 20, textAlign: 'center' }]}>
              {step === 1
                ? t('account_information')
                : step === 2
                  ? t('salon_details')
                  : step === 3
                    ? t('documents')
                    : t('bank_details')}
            </Text>
            <ScrollView showsVerticalScrollIndicator={false} >
              {renderStep()}

              {/* Navigation */}
              <View style={styles.buttonRow}>
                {step > 1 && (

                  <CustomButton
                    label={t('back')}
                    style={{ width: '48%', backgroundColor: themeColor.surface, }}
                    textStyle={{ color: themeColor.surfacetText }}
                    onPress={handleBack}
                  />

                )}
                {step < 4 ? (
                  <CustomButton
                    label={t('next')}
                    style={{ width: step == 1 ? '100%' : '48%', }}
                    onPress={handleNext}
                  />

                ) : (
                  <CustomButton
                    label={t('submit')}
                    style={{ width: '48%' }}
                    onPress={handleSubmit}
                  />

                )}
              </View>
            </ScrollView>
          </View>
          <SecondLayout />
          {/* </View> */}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};

export default AdminRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    height: 6,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007bff",
  },
  stepText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 10,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center", // Center vertically
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },




});
