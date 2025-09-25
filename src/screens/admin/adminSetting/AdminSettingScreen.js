import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AdminLayout from '../../../components/AdminLayout'
import { useTranslation } from 'react-i18next';
import { useColorTheme } from '../../../context/ThemeContext';
import createStyles from '../../../constants/styles';
import { RightArrowIcon } from '../../../iconComponents/IconComponents';
import useLanguage from '../../../hooks/useLanguage';
import AppearanceModal from '../../user/profile/ProfileComponents/AppearanceModal';
import LanguageModal from '../../user/profile/ProfileComponents/LanguageModal';

const AdminSettingScreen = () => {
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage } = useLanguage();
  const { themeColor, fontFamily, themeType } = useColorTheme();
  const commonStyles = createStyles(themeColor, fontFamily);
  const [languageModal, setLanguageModal] = useState(false);
  const [appearanceModal, setAppearanceModal] = useState(false);
  return (
    <AdminLayout>
      <View style={{ padding: 12, }}>
        <ScrollView>
          <View style={{ gap: 12 }}>

            <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
              <Text style={commonStyles.largeText}>{t('appearance')}</Text>
              <Pressable style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }} onPress={() => setAppearanceModal(true)}>
                <Text style={[commonStyles.text, { textTransform: 'capitalize', paddingHorizontal: 5 }]}>{themeType}</Text>
                <RightArrowIcon size={32} color={themeColor.iconSecondary} />
              </Pressable>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
              <Text style={commonStyles.largeText}>{t('language')}</Text>
              <Pressable style={{ flexDirection: 'row', gap: 5 }} onPress={() => setLanguageModal(true)}>
                <Text style={[commonStyles.text, { textTransform: 'capitalize', paddingHorizontal: 5 }]}>{currentLanguage}</Text>
                <RightArrowIcon size={32} color={themeColor.iconSecondary} />
              </Pressable>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
              <Text style={commonStyles.largeText}>{t('staff_management')}</Text>
              <Pressable style={{ flexDirection: 'row', gap: 5 }} onPress={() => navigation.navigate('EditProfileSreen')}>
                <RightArrowIcon size={32} color={themeColor.iconSecondary} />
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
              <Text style={commonStyles.largeText}>{t('gellary')}</Text>
              <Pressable style={{ flexDirection: 'row', gap: 5 }} onPress={() => navigation.navigate('EditProfileSreen')}>
                <RightArrowIcon size={32} color={themeColor.iconSecondary} />
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
              <Text style={commonStyles.largeText}>{t('offer_&_copoun')}</Text>
              <Pressable style={{ flexDirection: 'row', gap: 5 }} onPress={() => navigation.navigate('EditProfileSreen')}>
                <RightArrowIcon size={32} color={themeColor.iconSecondary} />
              </Pressable>
            </View>
            <View style={{ backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, gap: 10 }}>
              <Text style={[commonStyles.largeText, { borderLeftWidth: 4, borderColor: themeColor.success, paddingLeft: 10 }]}>{t('general_setting')}</Text>
              <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
                <Text style={commonStyles.largeText}>{t('your_policy')}</Text>
                <Pressable style={{}} onPress={() => navigation.navigate('AboutScreen')}>
                  <RightArrowIcon size={32} color={themeColor.iconSecondary} />
                </Pressable>
              </View>
              <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
                <Text style={commonStyles.largeText}>{t('send_feedback')}</Text>
                <Pressable style={{}} onPress={() => navigation.navigate('SendFeedbackScreen')}>
                  <RightArrowIcon size={32} color={themeColor.iconSecondary} />
                </Pressable>
              </View>

              <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
                <Text style={commonStyles.largeText}>{t('switch_account')}</Text>
                <Pressable style={{}}>
                  <RightArrowIcon size={32} color={themeColor.iconSecondary} />
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <AppearanceModal visible={appearanceModal} onClose={() => setAppearanceModal(false)} />
      <LanguageModal visible={languageModal} onClose={() => setLanguageModal(false)} />

    </AdminLayout>
  )
}

export default AdminSettingScreen