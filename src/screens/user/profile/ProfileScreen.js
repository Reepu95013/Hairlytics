import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import CustomBottomTabs from '../../../components/CustomBottomTabs'
import Layout from '../../../components/Layout'
import { useColorTheme } from '../../../context/ThemeContext'
import createStyles from '../../../constants/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LanguageModal from './ProfileComponents/LanguageModal'
import { RightArrowIcon } from '../../../iconComponents/IconComponents'
import AppearanceModal from './ProfileComponents/AppearanceModal'
import useLanguage from '../../../hooks/useLanguage'
import { useTranslation } from 'react-i18next'
import CustomAccountSwitch from '../../../components/CustomAccountSwitch'
import { useSelector } from 'react-redux'

const ProfileScreen = ({ navigation }) => {
  const { changeLanguage, currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const { themeColor, fontFamily, themeType } = useSelector(state => state.theme);
  const styles = createStyles(themeColor, fontFamily);
  const [languageModal, setLanguageModal] = useState(false);
  const [appearanceModal, setAppearanceModal] = useState(false);
  const [accountSwitchModal, setAccountSwitchModal] = useState(false);

  return (
    <Layout>
      <View style={{ gap: 10 }}>
        <View style={{ alignItems: 'center', gap: 6 }}>
          <View style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, alignSelf: 'center', borderColor: themeColor.border }}>

          </View>
          <Text style={styles.header}>Reepu Shah</Text>
          <Text style={styles.text}>reepushah95013@gmail.com</Text>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>{t('your_profile')}</Text>
          <Pressable style={{ flexDirection: 'row', gap: 5 }} onPress={() => navigation.navigate('EditProfileSreen')}>
            <Text style={styles.text}>30% {t('complete')}</Text>
            <RightArrowIcon size={32} color={themeColor.iconSecondary} />
          </Pressable>

        </View>
        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>{t('appearance')}</Text>
          <Pressable style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }} onPress={() => setAppearanceModal(true)}>
            <Text style={[styles.text, { textTransform: 'capitalize', paddingHorizontal: 5 }]}>{themeType}</Text>
            <RightArrowIcon size={32} color={themeColor.iconSecondary} />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>{t('language')}</Text>
          <Pressable style={{ flexDirection: 'row', gap: 5 }} onPress={() => setLanguageModal(true)}>
            <Text style={[styles.text, { textTransform: 'capitalize', paddingHorizontal: 5 }]}>{currentLanguage}</Text>
            <RightArrowIcon size={32} color={themeColor.iconSecondary} />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>{t('your_rating')}</Text>
          <Pressable style={{}} onPress={() => navigation.navigate('RatingScreen')}>
            <RightArrowIcon size={32} color={themeColor.iconSecondary} />
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, justifyContent: 'space-between' }}>
          <Text style={styles.largeText}>{t('switch_account')}</Text>
          <Pressable style={{}} onPress={() => setAccountSwitchModal(true)}>
            <RightArrowIcon size={32} color={themeColor.iconSecondary} />
          </Pressable>
        </View>

        <View style={{ backgroundColor: themeColor.secondaryBackground, padding: 10, borderRadius: 10, gap: 10 }}>
          <Text style={[styles.largeText, { borderLeftWidth: 4, borderColor: themeColor.success, paddingLeft: 10 }]}>{t('more')}</Text>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>{t('about')}</Text>
            <Pressable style={{}} onPress={() => navigation.navigate('AboutScreen')}>
              <RightArrowIcon size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>{t('send_feedback')}</Text>
            <Pressable style={{}} onPress={() => navigation.navigate('SendFeedbackScreen')}>
              <RightArrowIcon size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>{t('setting')}</Text>
            <Pressable style={{}}>
              <RightArrowIcon size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
            <Text style={styles.largeText}>{t('log_out')}</Text>
            <Pressable style={{}}>
              <RightArrowIcon size={32} color={themeColor.iconSecondary} />
            </Pressable>
          </View>
        </View>

      </View>
      <AppearanceModal visible={appearanceModal} onClose={() => setAppearanceModal(false)} />
      <LanguageModal visible={languageModal} onClose={() => setLanguageModal(false)} />
      <CustomAccountSwitch visible={accountSwitchModal} onClose={() => setAccountSwitchModal(false)} />
    </Layout>
  )
}

export default ProfileScreen